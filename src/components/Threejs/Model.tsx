import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  useProgress,
} from "@react-three/drei";
/* import Loader from "react-loader-spinner"; */

import ClipLoader from "react-spinners/ClipLoader";
/* import BarLoader from "react-spinners/BarLoader";
import BounceLoader from "react-spinners/BounceLoader"; */
import { CanvasContainer } from "../../styles/GlobalComponents";
import { ContextState } from "../../../context/ContextState";

import Planet from "./Planet";
import Island from "./Island";
import Geometry from "./Geometry";

const Loading: React.FC = () => {
  const { progress } = useProgress();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (progress != 100) setLoading(false);
    setLoading(true);
  }, [loading]);
  return (
    <Html center>
      <ClipLoader color="#36D7B7" loading={loading} size={120} />
    </Html>
  );
};

export default function Model(props) {
  const [darkMode, setDarkMode] = useContext(ContextState);
  return (
    <CanvasContainer>
      <Canvas
        colorManagement
        shadowMap
        camera={{
          position: [1, 0.4, 2],
          fov: 80 /* for planet: position: [10, 80, 10], fov: 50  */,
        }}
      >
        <Suspense fallback={<Loading />}>
          {/* <Geometry {...props} /> */}
          <Island />
          <Environment preset={/* darkMode ? "night" :  */ "dawn"} />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.2, 0]}
            opacity={0.8}
            width={9}
            height={9}
            blur={1.5}
            far={0.8}
          />
          {/* <Environment preset={darkMode ? "night" : "dawn"} /> */}
          {/* Bytter enironment basert på dark eller lightmode (Fungerer på shiny/reflective models)f */}
        </Suspense>

        <ambientLight intensity={0.8} />
        <spotLight intensity={3.8} position={[5, 10, 20]} />
        <OrbitControls minDistance={760} enableZoom={false} />
      </Canvas>
    </CanvasContainer>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
