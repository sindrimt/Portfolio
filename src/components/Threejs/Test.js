import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Test(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Pistol.gltf");
  /* useFrame(
    (state, change) =>
      (group.current.rotation.y += 0.007)
  ); */
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.24, 0.06, 0.05]} rotation={[0, -0.03, 0.02]}>
          <mesh
            geometry={nodes.mesh_0.geometry}
            material={nodes.mesh_0.material}
          />
          <mesh
            geometry={nodes.mesh_1.geometry}
            material={nodes.mesh_1.material}
          />
          <mesh
            geometry={nodes.mesh_2.geometry}
            material={nodes.mesh_2.material}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Pistol.gltf");
