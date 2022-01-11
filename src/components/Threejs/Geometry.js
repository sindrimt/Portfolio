import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Geometry(props) {
  const group = useRef();
  useFrame(
    (state, change) => (
      props.fast
        ? (group.current.rotation.z += 0.026)
        : (group.current.rotation.z += 0.006),
      (group.current.rotation.x += 0.003),
      (group.current.rotation.y += 0.005)
    )
    /* (group.current.rotation.x += 0.002) */
  );
  return (
    <group ref={group} dispose={null}>
      <mesh>
        <torusGeometry args={[10, 3, 16, 18]} />
        <meshBasicMaterial color="#8989bb" wireframe />
      </mesh>
    </group>
  );
}
