import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Planet({ ...props }) {
  const group = useRef();
  useFrame(
    (state, change) =>
      (group.current.rotation.y += 0.002) /* , (mesh.current.rotation.x += 0.002) */
  );
  const { nodes, materials, animations } = useGLTF("/planet.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.39, 0, 2.9]} scale={0.02}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[0, 0, 0.87]} scale={[1.22, 1.1, 1.22]}>
              <group position={[42.09, -1.08, -7.79]}>
                <mesh
                  geometry={nodes.Meteor_Meteor_MAT_0.geometry}
                  material={materials.Meteor_MAT}
                />
              </group>
            </group>
            <group position={[0, 0, 0.07]} rotation={[0, 0, 0.7]}>
              <group position={[-1, 2.03, 0]}>
                <mesh
                  geometry={nodes.Planet_Planet_MAT_0.geometry}
                  material={materials.Planet_MAT}
                />
              </group>
              <group position={[-0.86, 2.31, 0.2]}>
                <mesh
                  geometry={nodes.Water_Water_MAT_0.geometry}
                  material={materials.Water_MAT}
                />
              </group>
              <group position={[8.82, -25.11, -0.03]}>
                <mesh
                  geometry={nodes.Grass_Spring_Grass_Spring_MAT_0.geometry}
                  material={materials.Grass_Spring_MAT}
                />
              </group>
              <group position={[15.73, -25.36, 3.04]}>
                <mesh
                  geometry={nodes.Cube_Spring_Cubes_Spring_MAT_0.geometry}
                  material={materials.Cubes_Spring_MAT}
                />
              </group>
              <group position={[14.44, -26.74, 10.59]}>
                <mesh
                  geometry={nodes.Cone_Spring_Cone_Spring_MAT_0.geometry}
                  material={materials.Cone_Spring_MAT}
                />
              </group>
              <group position={[-21.43, 2.65, -17.79]}>
                <mesh
                  geometry={nodes.Grass_Summer_Grass_Summer_MAT_0.geometry}
                  material={materials.Grass_Summer_MAT}
                />
              </group>
              <group position={[-14.65, 5.02, -3.53]}>
                <mesh
                  geometry={nodes.Palm_All_Palm_ALL_MAT_0.geometry}
                  material={materials.Palm_ALL_MAT}
                />
              </group>
              <group position={[-23.54, 5.01, -17.07]}>
                <mesh
                  geometry={
                    nodes.Platonic_Summer_Platonic_Summer_MAT_0.geometry
                  }
                  material={materials.Platonic_Summer_MAT}
                />
              </group>
              <group position={[27.48, -4.22, -9.34]}>
                <mesh
                  geometry={nodes.Grass_Autumn_Grass_Autumn_MAT_0.geometry}
                  material={materials.Grass_Autumn_MAT}
                />
              </group>
              <group position={[31.32, -5.18, -12.47]}>
                <mesh
                  geometry={
                    nodes.Platonic_Autumn_Platonic_Autumn_MAT_0.geometry
                  }
                  material={materials.Platonic_Autumn_MAT}
                />
              </group>
              <group position={[28.63, -4.7, -10.65]}>
                <mesh
                  geometry={nodes.Cone_Autumn_Cones_Autumn_MAT_0.geometry}
                  material={materials.Cones_Autumn_MAT}
                />
              </group>
              <group position={[-1.88, 18.39, 19.4]}>
                <mesh
                  geometry={nodes.Grass_Winter_Grass_Winter_MAT_0.geometry}
                  material={materials.Grass_Winter_MAT}
                />
              </group>
              <group position={[-4.21, 21.6, 25.6]}>
                <mesh
                  geometry={nodes.Stick_All_Stick_All_MAT_0.geometry}
                  material={materials.Stick_All_MAT}
                />
              </group>
              <group position={[2.88, 25.75, 21.89]}>
                <mesh
                  geometry={nodes.Cone_Winter_Cones_Winter_MAT_0.geometry}
                  material={materials.Cones_Winter_MAT}
                />
              </group>
              <group position={[-1.19, 33.62, 6.49]}>
                <mesh
                  geometry={nodes.Rock_Winter3_Rocks3_Winter_MAT_0.geometry}
                  material={materials.Rocks3_Winter_MAT}
                />
              </group>
              <group position={[15.56, 19.35, 14.25]}>
                <mesh
                  geometry={nodes.Rock_Winter2_Rocks2_Winter_MAT_0.geometry}
                  material={materials.Rocks2_Winter_MAT}
                />
              </group>
              <group position={[-0.97, 17.1, 16.8]}>
                <mesh
                  geometry={nodes.Rock_Winter1_Rocks1_Winter_MAT_0.geometry}
                  material={materials.Rocks1_Winter_MAT}
                />
              </group>
              <group position={[0.22, -0.76, -3.13]}>
                <mesh
                  geometry={nodes.Rock_3_Rocks3_MAT_0.geometry}
                  material={materials.Rocks3_MAT}
                />
              </group>
              <group position={[2.72, 2.35, -1.94]}>
                <mesh
                  geometry={nodes.Rock_2_Rocks2_MAT_0.geometry}
                  material={materials.Rocks2_MAT}
                />
              </group>
              <group position={[-0.78, -1.21, -0.97]}>
                <mesh
                  geometry={nodes.Rock_1_Rocks1_MAT_0.geometry}
                  material={materials.Rocks1_MAT}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/planet.gltf");
