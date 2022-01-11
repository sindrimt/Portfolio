import React, { useContext } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { CanvasContainer } from "../../styles/GlobalComponents";
import { ContextState } from "../../../context/ContextState";

import Test from "./Test";
import Geometry from "./Geometry";
export default function Model(props) {
  const [darkMode, setDarkMode] = useContext(ContextState);
  return (
    <CanvasContainer>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [1, 1, 2], fov: 80 }}
      >
        <Suspense fallback={null}>
          {/* <Geometry {...props} /> */}
          <Test />
          {/* <Environment files="envi.hdr" /> */}

          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.2, 0]}
            opacity={0.8}
            width={10}
            height={10}
            blur={1.5}
            far={0.8}
          />
          <Environment preset={darkMode ? "night" : "dawn"} />
        </Suspense>

        <ambientLight intensity={0.8} />
        <spotLight intensity={3.8} position={[5, 10, 20]} />
        <OrbitControls minDistance={760} />
      </Canvas>
    </CanvasContainer>
  );
}
