import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

import Test from "./Test";

export default function App() {
  return (
    <div className="App">
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [10, -2, -8], fov: 60 }}
      >
        <Suspense fallback={null}>
          <Test />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.7, 0]}
            opacity={2.8}
            width={10}
            height={10}
            blur={1.5}
            far={0.8}
          />
          <Environment preset="dawn" />
        </Suspense>
        <ambientLight intensity={0.2} />
        <spotLight intensity={0.1} position={[5, 10, 20]} />
        <OrbitControls minDistance={11} maxDistance={14} />
      </Canvas>
    </div>
  );
}
