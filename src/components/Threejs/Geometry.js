import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Geometry() {
  const group = useRef();
  useFrame(
    (state, change) =>
      (group.current.rotation.y += 0.007) /* , (mesh.current.rotation.x += 0.002) */
  );
  return (
    <group ref={group} dispose={null}>
      <mesh>
        <torusGeometry args={[10, 3, 16, 20]} />
        <meshBasicMaterial color={"lightblue"} wireframe />
      </mesh>
    </group>
  );
}
