import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
//import {useGLTFLoader} from "@react-three/drei";

import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Test from "./Test";

const Shoe = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("shoe-draco.glb");
  useFrame(
    (state, change) =>
      (group.current.rotation.y += 0.005) /* , (mesh.current.rotation.x += 0.002) */
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  );
};
useGLTF.preload("shoe-draco.glb"); /* ??? */

const Box = (props) => {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(
    (state, change) =>
      (mesh.current.rotation.y += 0.007) /* , (mesh.current.rotation.x += 0.002) */
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 3 : 2.5}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "#17557e" : "lightblue"} />
    </mesh>
  );
};

/* const Model = () => {
    const gltf = useGLTFLoader("")
} */

const ThreeObject = () => {
  return (
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [10, 1, -8], fov: 15 /* 15 for shoe / geometry */ }}
    >
      <Suspense fallback={null}>
        {/* <Shoe /> */}
        <Test />

        <Environment files="envi.hdr" />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={0.5}
          width={10}
          height={10}
          blur={1.5}
          far={0.8}
        />
      </Suspense>
      <ambientLight intensity={0.2} />
      <spotLight intensity={0.1} position={[5, 20, 20]} />
      {/*  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} /> */}

      {/* <Box position={[1.2, 0, 0]} /> */}
      {/* <CoolLine /> */}
      <OrbitControls minDistance={8} maxDistance={11} />
    </Canvas>
  );
};

export default ThreeObject;
