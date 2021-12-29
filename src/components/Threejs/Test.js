import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Test(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Poimandres.gltf");
  useFrame(
    (state, change) =>
      (group.current.rotation.y += 0.007) /* , (mesh.current.rotation.x += 0.002) */
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

useGLTF.preload("/Poimandres.gltf");
