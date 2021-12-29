import React, { useContext } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { CanvasContainer } from "../../styles/GlobalComponents";
import { ContextState } from "../../../context/ContextState";

import Test from "./Test";
import Geometry from "./Geometry";

export default function Model() {
  const [darkMode, setDarkMode] = useContext(ContextState);
  return (
    <CanvasContainer>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [10, -2, -8], fov: 75 }}
      >
        <Suspense fallback={null}>
          <Geometry />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.7, 0]}
            opacity={2.8}
            width={10}
            height={10}
            blur={1.5}
            far={0.8}
          />
          {/* <Environment preset={darkMode ? "night" : "dawn"} /> */}
        </Suspense>
        <ambientLight intensity={0.8} />
        <spotLight intensity={0.8} position={[5, 10, 20]} />
        <OrbitControls maxDistance={35} minDistance={25} />
      </Canvas>
    </CanvasContainer>
  );
}
