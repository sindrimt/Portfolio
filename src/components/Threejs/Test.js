import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Test(props) {
  const group = useRef();
  useFrame(
    (state, change) =>
      (group.current.rotation.y += 0.004) /* , (mesh.current.rotation.x += 0.002) */
  );
  const { nodes, materials } = useGLTF("/island.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[18.01, 0, -5.06]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.51}
          >
            <mesh
              geometry={nodes["Cylinder001_Material_#343_0"].geometry}
              material={materials.Material_343}
            />
          </group>
          <group
            position={[181.39, 52.28, 7.84]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.1, 0.9, 1.69]}
          >
            <mesh
              geometry={nodes["Box003_Material_#185_0"].geometry}
              material={materials.Material_185}
            />
          </group>
          <group
            position={[296.07, -5.52, 63.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.1, 0.9, 1.1]}
          >
            <mesh
              geometry={nodes["Cylinder006_Material_#186_0"].geometry}
              material={materials.Material_186}
            />
          </group>
          <group
            position={[295.58, 204.31, 6.32]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["Box004_Material_#144_0"].geometry}
              material={materials.Material_144}
            />
          </group>
          <group position={[78.2, 1.9, -16.18]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes["Plane001_Material_#371_0"].geometry}
              material={materials.Material_371}
            />
          </group>
          <group
            position={[18.81, 367.69, -27.73]}
            rotation={[-2.75, -0.48, 3.12]}
          >
            <mesh
              geometry={nodes["Cylinder010_Material_#286_0"].geometry}
              material={materials.Material_286}
            />
          </group>
          <group
            position={[-18.01, 319.76, -48.8]}
            rotation={[-1.52, 0.02, 0.44]}
          >
            <mesh
              geometry={nodes["Box005_Material_#221_0"].geometry}
              material={materials.Material_221}
            />
          </group>
          <group
            position={[27.86, 465.89, -7.8]}
            rotation={[0.09, 0.35, -0.03]}
            scale={[0.81, 0.82, 1]}
          >
            <mesh
              geometry={nodes["Cylinder012_Material_#287_0"].geometry}
              material={materials.Material_287}
            />
          </group>
          <group
            position={[4.06, -1.9, 204.08]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["Box006_Material_#289_0"].geometry}
              material={nodes["Box006_Material_#289_0"].material}
            />
          </group>
          <group
            position={[314.09, 61.48, 7.72]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["Box008_Material_#369_0"].geometry}
              material={materials.Material_369}
            />
          </group>
          <group
            position={[348.61, 17.17, 8.08]}
            rotation={[-Math.PI / 2, Math.PI / 4, 0]}
          >
            <mesh
              geometry={nodes["Plane002_22_-_Default_0"].geometry}
              material={materials["22_-_Default"]}
            />
          </group>
          <group
            position={[-14.32, 252.41, 53.12]}
            rotation={[-0.14, -0.78, -0.1]}
          >
            <mesh
              geometry={nodes["Torus001_Material_#139_0"].geometry}
              material={materials.Material_139}
            />
          </group>
          <group
            position={[6.96, 216.55, 69.66]}
            rotation={[-0.11, -0.35, -0.04]}
          >
            <mesh
              geometry={nodes["Torus002_Material_#138_0"].geometry}
              material={materials.Material_138}
            />
          </group>
          <group
            position={[279.53, -11.95, -127.56]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["Cylinder024_Material_#346_0"].geometry}
              material={materials.Material_346}
            />
          </group>
          <group
            position={[-125.75, -3.63, -143.3]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["Box025_Material_#288_0"].geometry}
              material={nodes["Box025_Material_#288_0"].material}
            />
          </group>
          <group
            position={[-200.98, 15.48, 56.07]}
            rotation={[-Math.PI / 2, 0, 0.17]}
          >
            <mesh
              geometry={nodes["Box030_Material_#213_0"].geometry}
              material={materials.Material_213}
            />
          </group>
          <group
            position={[-193.34, 0, 135.72]}
            rotation={[-Math.PI / 2, 0, 0.26]}
          >
            <mesh
              geometry={nodes["Box035_Material_#319_0"].geometry}
              material={materials.Material_319}
            />
          </group>
          <group position={[130.81, 117.6, -93.86]} rotation={[0.09, 1.25, 0]}>
            <mesh
              geometry={nodes["Box043_Material_#188_0"].geometry}
              material={materials.Material_188}
            />
          </group>
          <group
            position={[-37.28, 346.9, 11.93]}
            rotation={[0.93, -1.52, 1.01]}
          >
            <mesh
              geometry={nodes["Box050_Material_#211_0"].geometry}
              material={nodes["Box050_Material_#211_0"].material}
            />
          </group>
          <group
            position={[36.84, 470.16, 15.7]}
            rotation={[-1.48, 0, 0.26]}
            scale={[0.44, 0.44, 0.44]}
          >
            <group position={[0, 0, -80.8]}>
              <mesh
                geometry={nodes["Box052_Material_#134_0"].geometry}
                material={materials.Material_134}
              />
            </group>
          </group>
          <group
            position={[98.72, -3.63, -195.42]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["Box054_Material_#288_0"].geometry}
              material={nodes["Box054_Material_#288_0"].material}
            />
          </group>
          <group position={[-0.93, 346.9, 65.32]} rotation={[0.05, -0.49, 0.1]}>
            <mesh
              geometry={nodes["Box055_Material_#211_0"].geometry}
              material={nodes["Box055_Material_#211_0"].material}
            />
          </group>
          <group position={[67.56, 346.9, 65.32]} rotation={[0, 0.47, 0]}>
            <mesh
              geometry={nodes["Box056_Material_#211_0"].geometry}
              material={nodes["Box056_Material_#211_0"].material}
            />
          </group>
          <group position={[101.64, 343.7, 15.97]} rotation={[0, 1.25, 0]}>
            <mesh
              geometry={nodes["Box057_Material_#211_0"].geometry}
              material={nodes["Box057_Material_#211_0"].material}
            />
          </group>
          <group
            position={[85.36, 343.7, -40.89]}
            rotation={[Math.PI, 0.76, -Math.PI]}
          >
            <mesh
              geometry={nodes["Box058_Material_#211_0"].geometry}
              material={nodes["Box058_Material_#211_0"].material}
            />
          </group>
          <group
            position={[295.52, 249.02, 15.7]}
            rotation={[-1.66, 0.02, -3.14]}
            scale={[0.63, 0.63, 0.63]}
          >
            <group position={[0, 0, -80.8]}>
              <mesh
                geometry={nodes["Box059_Material_#143_0"].geometry}
                material={materials.Material_143}
              />
            </group>
          </group>
          <group position={[407.22, -11.95, 0.59]} rotation={[-1.83, 0, 0]}>
            <mesh
              geometry={nodes["Cylinder025_Material_#345_0"].geometry}
              material={materials.Material_345}
            />
          </group>
          <group position={[366.19, -11.95, 125.69]} rotation={[-1.22, 0, 0]}>
            <mesh
              geometry={nodes["Cylinder026_Material_#344_0"].geometry}
              material={materials.Material_344}
            />
          </group>
          <group
            position={[-92.79, -3.63, -25.94]}
            rotation={[-Math.PI / 2, 0, Math.PI / 9]}
          >
            <mesh
              geometry={nodes["Box060_Material_#288_0"].geometry}
              material={nodes["Box060_Material_#288_0"].material}
            />
          </group>
          <group
            position={[-40.29, 24.41, 100.66]}
            rotation={[-Math.PI / 2, 0, 3.05]}
          >
            <mesh
              geometry={nodes["Box061_Material_#289_0"].geometry}
              material={nodes["Box061_Material_#289_0"].material}
            />
          </group>
          <group
            position={[-96.8, 29.72, 35.18]}
            rotation={[-Math.PI / 2, -0.09, -2.53]}
          >
            <mesh
              geometry={nodes["Box062_Material_#288_0"].geometry}
              material={nodes["Box062_Material_#288_0"].material}
            />
          </group>
          <group
            position={[-71.57, 29.72, 65.74]}
            rotation={[-1.58, 0.04, -0.44]}
          >
            <mesh
              geometry={nodes["Box063_Material_#220_0"].geometry}
              material={materials.Material_220}
            />
          </group>
          <group
            position={[-101.11, 63.22, -5.58]}
            rotation={[-Math.PI / 2, -1.22, 0]}
            scale={0.85}
          >
            <mesh
              geometry={nodes["Box064_Material_#289_0"].geometry}
              material={nodes["Box064_Material_#289_0"].material}
            />
          </group>
          <group
            position={[-130.72, -1.9, 5.07]}
            rotation={[-1.67, -0.13, -1.33]}
            scale={[1.23, 1.12, 1.2]}
          >
            <mesh
              geometry={nodes["Box065_Material_#289_0"].geometry}
              material={nodes["Box065_Material_#289_0"].material}
            />
          </group>
          <group
            position={[26.87, -5.22, 115.72]}
            rotation={[-Math.PI / 2, -0.09, -2.53]}
            scale={1.08}
          >
            <mesh
              geometry={nodes["Box066_Material_#288_0"].geometry}
              material={nodes["Box066_Material_#288_0"].material}
            />
          </group>
          <group
            position={[-51.72, 96.79, 34.41]}
            rotation={[-1.59, 0.14, 1.37]}
            scale={[1.23, 1.12, 1.2]}
          >
            <mesh
              geometry={nodes["Box067_Material_#289_0"].geometry}
              material={nodes["Box067_Material_#289_0"].material}
            />
          </group>
          <group
            position={[-4.71, -15.91, -113.59]}
            rotation={[-Math.PI / 2, -0.09, -2.53]}
          >
            <mesh
              geometry={nodes["Box068_Material_#288_0"].geometry}
              material={nodes["Box068_Material_#288_0"].material}
            />
          </group>
          <group
            position={[-3.48, 18.8, -156.22]}
            rotation={[2.82, -1.28, 2.59]}
            scale={[0.85, 0.85, 0.85]}
          >
            <mesh
              geometry={nodes["Box069_Material_#289_0"].geometry}
              material={nodes["Box069_Material_#289_0"].material}
            />
          </group>
          <group
            position={[17.1, 73.3, -105.17]}
            rotation={[-1.61, -0.36, 1.41]}
            scale={[0.85, 0.85, 0.85]}
          >
            <mesh
              geometry={nodes["Box070_Material_#289_0"].geometry}
              material={nodes["Box070_Material_#289_0"].material}
            />
          </group>
          <group
            position={[100.81, 104.68, -118.27]}
            rotation={[-1.29, -0.01, -0.67]}
          >
            <mesh
              geometry={nodes["Cylinder027_Material_#312_0"].geometry}
              material={materials.Material_312}
            />
          </group>
          <group
            position={[89.71, 98.56, -115.3]}
            rotation={[-1.64, 0.07, -0.58]}
            scale={[0.85, 0.85, 0.85]}
          >
            <mesh
              geometry={nodes["Box071_Material_#289_0"].geometry}
              material={nodes["Box071_Material_#289_0"].material}
            />
          </group>
          <group
            position={[149.75, 114.95, -190.97]}
            rotation={[Math.PI, 0.44, 0]}
            scale={[0.65, 0.65, 0.65]}
          >
            <mesh
              geometry={nodes["Cylinder028_Material_#210_0"].geometry}
              material={materials.Material_210}
            />
          </group>
          <group
            position={[147.48, 128.68, -191.47]}
            rotation={[-1.6, -0.21, -1.72]}
          >
            <mesh
              geometry={nodes["Cylinder029_Material_#372_0"].geometry}
              material={materials.Material_372}
            />
          </group>
          <group
            position={[84.06, 55.25, 120.99]}
            rotation={[-Math.PI / 2, 0, 2.09]}
            scale={[1.18, 1.74, 1]}
          >
            <group position={[0, 0, -51.06]}>
              <mesh
                geometry={nodes["Object002_Material_#214_0"].geometry}
                material={materials.Material_214}
              />
            </group>
          </group>
          <group
            position={[69.41, 54.45, 144.42]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["Cylinder033_Material_#216_0"].geometry}
              material={materials.Material_216}
            />
          </group>
          <group
            position={[86.11, 56.58, 126.34]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.89, 0.78, 0.61]}
          >
            <mesh
              geometry={nodes["Cylinder034_Material_#347_0"].geometry}
              material={materials.Material_347}
            />
          </group>
          <group
            position={[97.02, 56.58, 135.08]}
            rotation={[-Math.PI / 2, 0, 0.26]}
          >
            <mesh
              geometry={nodes["Box072_Material_#215_0"].geometry}
              material={materials.Material_215}
            />
          </group>
          <group
            position={[173.25, 197.39, 23.97]}
            rotation={[-0.81, 0.18, 0.06]}
            scale={[1.22, 1.22, 1.22]}
          >
            <mesh
              geometry={nodes["Box091_Material_#8721_0"].geometry}
              material={materials.Material_8721}
            />
          </group>
          <group
            position={[74.08, 196.39, 64.47]}
            rotation={[-Math.PI / 2, 0, 0.61]}
            scale={0.78}
          >
            <mesh
              geometry={nodes["ChamferBox002_Material_#263_0"].geometry}
              material={nodes["ChamferBox002_Material_#263_0"].material}
            />
          </group>
          <group
            position={[38.07, 171.44, 73.57]}
            rotation={[-Math.PI / 2, 0, 0.09]}
            scale={[0.78, 0.78, 0.78]}
          >
            <mesh
              geometry={nodes["ChamferBox003_Material_#263_0"].geometry}
              material={nodes["ChamferBox003_Material_#263_0"].material}
            />
          </group>
          <group
            position={[-19.13, 265.63, 21.89]}
            rotation={[-Math.PI / 2, 0, -1.34]}
            scale={[0.78, 0.78, 0.78]}
          >
            <mesh
              geometry={nodes["ChamferBox004_Material_#263_0"].geometry}
              material={nodes["ChamferBox004_Material_#263_0"].material}
            />
          </group>
          <group
            position={[-18.67, 240.67, -9.65]}
            rotation={[-Math.PI / 2, 0, -1.86]}
            scale={[0.78, 0.78, 0.78]}
          >
            <mesh
              geometry={nodes["ChamferBox005_Material_#263_0"].geometry}
              material={nodes["ChamferBox005_Material_#263_0"].material}
            />
          </group>
          <group
            position={[80.24, 265.63, -25.41]}
            rotation={[-Math.PI / 2, 0, 2.07]}
            scale={[0.78, 0.78, 0.78]}
          >
            <mesh
              geometry={nodes["ChamferBox006_Material_#263_0"].geometry}
              material={nodes["ChamferBox006_Material_#263_0"].material}
            />
          </group>
          <group
            position={[60.37, 161.92, -46.11]}
            rotation={[-Math.PI / 2, 0, 2.68]}
            scale={1.11}
          >
            <mesh
              geometry={nodes["ChamferBox007_Material_#263_0"].geometry}
              material={nodes["ChamferBox007_Material_#263_0"].material}
            />
          </group>
          <group
            position={[10.21, 179.24, -48.28]}
            rotation={[-Math.PI / 2, 0, -2.82]}
            scale={[0.93, 0.93, 0.93]}
          >
            <mesh
              geometry={nodes["ChamferBox008_Material_#263_0"].geometry}
              material={nodes["ChamferBox008_Material_#263_0"].material}
            />
          </group>
          <group
            position={[87.82, 240.67, 31.03]}
            rotation={[-Math.PI / 2, 0, 1.22]}
            scale={[0.78, 0.78, 0.78]}
          >
            <mesh
              geometry={nodes["ChamferBox009_Material_#263_0"].geometry}
              material={nodes["ChamferBox009_Material_#263_0"].material}
            />
          </group>
          <group
            position={[-72.37, 117.45, -2.87]}
            rotation={[3.11, -1.46, -1.62]}
          >
            <mesh
              geometry={nodes["Plane004_Material_#342_0"].geometry}
              material={nodes["Plane004_Material_#342_0"].material}
            />
          </group>
          <group position={[-72.37, 117.45, -2.87]} rotation={[0, -0.72, 1.55]}>
            <mesh
              geometry={nodes["Plane005_Material_#342_0"].geometry}
              material={nodes["Plane005_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-72.37, 117.45, -2.87]}
            rotation={[0.01, 1.03, 1.54]}
          >
            <mesh
              geometry={nodes["Plane006_Material_#342_0"].geometry}
              material={nodes["Plane006_Material_#342_0"].material}
            />
          </group>
          <group position={[-72.37, 117.45, -2.87]} rotation={[0, -0.02, 1.55]}>
            <mesh
              geometry={nodes["Plane007_Material_#342_0"].geometry}
              material={nodes["Plane007_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-77.65, 110.66, 6.51]}
            rotation={[1.88, -1.2, -2.88]}
          >
            <mesh
              geometry={nodes["Plane012_Material_#342_0"].geometry}
              material={nodes["Plane012_Material_#342_0"].material}
            />
          </group>
          <group position={[-77.65, 110.66, 6.51]} rotation={[0.3, -0.67, 2]}>
            <mesh
              geometry={nodes["Plane013_Material_#342_0"].geometry}
              material={nodes["Plane013_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-77.65, 110.66, 6.51]}
            rotation={[-0.51, 0.93, 2.16]}
          >
            <mesh
              geometry={nodes["Plane014_Material_#342_0"].geometry}
              material={nodes["Plane014_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-77.65, 110.66, 6.51]}
            rotation={[0.01, -0.02, 1.9]}
          >
            <mesh
              geometry={nodes["Plane015_Material_#342_0"].geometry}
              material={nodes["Plane015_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-77.65, 113.23, 13.53]}
            rotation={[1.88, -1.2, -2.88]}
          >
            <mesh
              geometry={nodes["Plane016_Material_#342_0"].geometry}
              material={nodes["Plane016_Material_#342_0"].material}
            />
          </group>
          <group position={[-77.65, 113.23, 13.53]} rotation={[0.3, -0.67, 2]}>
            <mesh
              geometry={nodes["Plane017_Material_#342_0"].geometry}
              material={nodes["Plane017_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-77.65, 113.23, 13.53]}
            rotation={[-0.51, 0.93, 2.16]}
          >
            <mesh
              geometry={nodes["Plane018_Material_#342_0"].geometry}
              material={nodes["Plane018_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-77.65, 113.23, 13.53]}
            rotation={[0.01, -0.02, 1.9]}
          >
            <mesh
              geometry={nodes["Plane019_Material_#342_0"].geometry}
              material={nodes["Plane019_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-82.58, 113.38, 27.96]}
            rotation={[0.01, -1.07, 1.56]}
          >
            <mesh
              geometry={nodes["Plane020_Material_#342_0"].geometry}
              material={nodes["Plane020_Material_#342_0"].material}
            />
          </group>
          <group position={[-82.58, 113.38, 27.96]} rotation={[0, -0.11, 1.55]}>
            <mesh
              geometry={nodes["Plane021_Material_#342_0"].geometry}
              material={nodes["Plane021_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-82.58, 113.38, 27.96]}
            rotation={[3.09, 1.51, -1.54]}
          >
            <mesh
              geometry={nodes["Plane022_Material_#342_0"].geometry}
              material={nodes["Plane022_Material_#342_0"].material}
            />
          </group>
          <group position={[-82.58, 113.38, 27.96]} rotation={[0, 0.59, 1.55]}>
            <mesh
              geometry={nodes["Plane023_Material_#342_0"].geometry}
              material={nodes["Plane023_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-72.86, 110.51, 65.8]}
            rotation={[0.66, -0.97, 2.08]}
          >
            <mesh
              geometry={nodes["Plane024_Material_#342_0"].geometry}
              material={nodes["Plane024_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-72.86, 110.51, 65.8]}
            rotation={[0.23, -0.08, 1.83]}
          >
            <mesh
              geometry={nodes["Plane025_Material_#342_0"].geometry}
              material={nodes["Plane025_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-72.86, 110.51, 65.8]}
            rotation={[-1.7, 1.27, -2.84]}
          >
            <mesh
              geometry={nodes["Plane026_Material_#342_0"].geometry}
              material={nodes["Plane026_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-72.86, 110.51, 65.8]}
            rotation={[0.01, 0.59, 1.89]}
          >
            <mesh
              geometry={nodes["Plane027_Material_#342_0"].geometry}
              material={nodes["Plane027_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-77.51, 109.16, 44.42]}
            rotation={[0.01, 0.59, 1.89]}
          >
            <mesh
              geometry={nodes["Plane035_Material_#342_0"].geometry}
              material={nodes["Plane035_Material_#342_0"].material}
            />
          </group>
          <group
            position={[57.59, 117.45, -105.23]}
            rotation={[0.01, 1.2, 1.54]}
          >
            <mesh
              geometry={nodes["Plane036_Material_#342_0"].geometry}
              material={nodes["Plane036_Material_#342_0"].material}
            />
          </group>
          <group
            position={[87.25, 114.58, -79.8]}
            rotation={[0.39, -0.43, 1.68]}
          >
            <mesh
              geometry={nodes["Plane037_Material_#342_0"].geometry}
              material={nodes["Plane037_Material_#342_0"].material}
            />
          </group>
          <group
            position={[87.25, 114.58, -79.8]}
            rotation={[0.27, 0.52, 1.68]}
          >
            <mesh
              geometry={nodes["Plane038_Material_#342_0"].geometry}
              material={nodes["Plane038_Material_#342_0"].material}
            />
          </group>
          <group
            position={[87.25, 114.58, -79.8]}
            rotation={[-2.68, 0.87, -1.77]}
          >
            <mesh
              geometry={nodes["Plane039_Material_#342_0"].geometry}
              material={nodes["Plane039_Material_#342_0"].material}
            />
          </group>
          <group position={[87.25, 114.58, -79.8]} rotation={[0.03, 1.2, 1.87]}>
            <mesh
              geometry={nodes["Plane040_Material_#342_0"].geometry}
              material={nodes["Plane040_Material_#342_0"].material}
            />
          </group>
          <group
            position={[64.59, 110.66, -97.06]}
            rotation={[0.39, -0.43, 1.68]}
          >
            <mesh
              geometry={nodes["Plane041_Material_#342_0"].geometry}
              material={nodes["Plane041_Material_#342_0"].material}
            />
          </group>
          <group
            position={[64.59, 110.66, -97.06]}
            rotation={[0.27, 0.52, 1.68]}
          >
            <mesh
              geometry={nodes["Plane042_Material_#342_0"].geometry}
              material={nodes["Plane042_Material_#342_0"].material}
            />
          </group>
          <group
            position={[64.59, 110.66, -97.06]}
            rotation={[-2.68, 0.87, -1.77]}
          >
            <mesh
              geometry={nodes["Plane043_Material_#342_0"].geometry}
              material={nodes["Plane043_Material_#342_0"].material}
            />
          </group>
          <group
            position={[64.59, 110.66, -97.06]}
            rotation={[0.03, 1.2, 1.87]}
          >
            <mesh
              geometry={nodes["Plane044_Material_#342_0"].geometry}
              material={nodes["Plane044_Material_#342_0"].material}
            />
          </group>
          <group
            position={[71.18, 113.23, -94.66]}
            rotation={[0.39, -0.43, 1.68]}
          >
            <mesh
              geometry={nodes["Plane045_Material_#342_0"].geometry}
              material={nodes["Plane045_Material_#342_0"].material}
            />
          </group>
          <group
            position={[71.18, 113.23, -94.66]}
            rotation={[0.27, 0.52, 1.68]}
          >
            <mesh
              geometry={nodes["Plane046_Material_#342_0"].geometry}
              material={nodes["Plane046_Material_#342_0"].material}
            />
          </group>
          <group
            position={[71.18, 113.23, -94.66]}
            rotation={[-2.68, 0.87, -1.77]}
          >
            <mesh
              geometry={nodes["Plane047_Material_#342_0"].geometry}
              material={nodes["Plane047_Material_#342_0"].material}
            />
          </group>
          <group
            position={[71.18, 113.23, -94.66]}
            rotation={[0.03, 1.2, 1.87]}
          >
            <mesh
              geometry={nodes["Plane048_Material_#342_0"].geometry}
              material={nodes["Plane048_Material_#342_0"].material}
            />
          </group>
          <group position={[83.06, 113.38, -85.09]} rotation={[0, 0.15, 1.55]}>
            <mesh
              geometry={nodes["Plane049_Material_#342_0"].geometry}
              material={nodes["Plane049_Material_#342_0"].material}
            />
          </group>
          <group
            position={[83.06, 113.38, -85.09]}
            rotation={[0.01, 1.11, 1.54]}
          >
            <mesh
              geometry={nodes["Plane050_Material_#342_0"].geometry}
              material={nodes["Plane050_Material_#342_0"].material}
            />
          </group>
          <group
            position={[83.06, 113.38, -85.09]}
            rotation={[3.14, 0.28, -1.59]}
          >
            <mesh
              geometry={nodes["Plane051_Material_#342_0"].geometry}
              material={nodes["Plane051_Material_#342_0"].material}
            />
          </group>
          <group
            position={[83.06, 113.38, -85.09]}
            rotation={[3.13, 1.33, -1.58]}
          >
            <mesh
              geometry={nodes["Plane052_Material_#342_0"].geometry}
              material={nodes["Plane052_Material_#342_0"].material}
            />
          </group>
          <group
            position={[93.48, 106.59, -82.42]}
            rotation={[0.35, 0.14, 1.46]}
          >
            <mesh
              geometry={nodes["Plane053_Material_#342_0"].geometry}
              material={nodes["Plane053_Material_#342_0"].material}
            />
          </group>
          <group
            position={[93.48, 106.59, -82.42]}
            rotation={[0.52, 1.09, 1.35]}
          >
            <mesh
              geometry={nodes["Plane054_Material_#342_0"].geometry}
              material={nodes["Plane054_Material_#342_0"].material}
            />
          </group>
          <group
            position={[93.48, 106.59, -82.42]}
            rotation={[-2.83, 0.3, -1.5]}
          >
            <mesh
              geometry={nodes["Plane055_Material_#342_0"].geometry}
              material={nodes["Plane055_Material_#342_0"].material}
            />
          </group>
          <group
            position={[93.48, 106.59, -82.42]}
            rotation={[3.1, 1.33, -1.2]}
          >
            <mesh
              geometry={nodes["Plane056_Material_#342_0"].geometry}
              material={nodes["Plane056_Material_#342_0"].material}
            />
          </group>
          <group
            position={[100.26, 109.16, -84.23]}
            rotation={[0.35, 0.14, 1.46]}
          >
            <mesh
              geometry={nodes["Plane057_Material_#342_0"].geometry}
              material={nodes["Plane057_Material_#342_0"].material}
            />
          </group>
          <group
            position={[100.26, 109.16, -84.23]}
            rotation={[0.52, 1.09, 1.35]}
          >
            <mesh
              geometry={nodes["Plane058_Material_#342_0"].geometry}
              material={nodes["Plane058_Material_#342_0"].material}
            />
          </group>
          <group
            position={[100.26, 109.16, -84.23]}
            rotation={[-2.83, 0.3, -1.5]}
          >
            <mesh
              geometry={nodes["Plane059_Material_#342_0"].geometry}
              material={nodes["Plane059_Material_#342_0"].material}
            />
          </group>
          <group
            position={[100.26, 109.16, -84.23]}
            rotation={[3.1, 1.33, -1.2]}
          >
            <mesh
              geometry={nodes["Plane060_Material_#342_0"].geometry}
              material={nodes["Plane060_Material_#342_0"].material}
            />
          </group>
          <group position={[83.06, 113.38, -147.39]} rotation={[0, 0.15, 1.55]}>
            <mesh
              geometry={nodes["Plane061_Material_#342_0"].geometry}
              material={nodes["Plane061_Material_#342_0"].material}
            />
          </group>
          <group
            position={[83.06, 113.38, -147.39]}
            rotation={[0.01, 1.11, 1.54]}
          >
            <mesh
              geometry={nodes["Plane062_Material_#342_0"].geometry}
              material={nodes["Plane062_Material_#342_0"].material}
            />
          </group>
          <group
            position={[83.06, 113.38, -147.39]}
            rotation={[3.13, 1.33, -1.58]}
          >
            <mesh
              geometry={nodes["Plane063_Material_#342_0"].geometry}
              material={nodes["Plane063_Material_#342_0"].material}
            />
          </group>
          <group position={[62.6, 114.78, -122.53]} rotation={[0, 0.15, 1.55]}>
            <mesh
              geometry={nodes["Plane064_Material_#342_0"].geometry}
              material={nodes["Plane064_Material_#342_0"].material}
            />
          </group>
          <group
            position={[62.6, 114.78, -122.53]}
            rotation={[0.01, 1.11, 1.54]}
          >
            <mesh
              geometry={nodes["Plane065_Material_#342_0"].geometry}
              material={nodes["Plane065_Material_#342_0"].material}
            />
          </group>
          <group
            position={[62.6, 114.78, -122.53]}
            rotation={[3.13, 1.33, -1.58]}
          >
            <mesh
              geometry={nodes["Plane066_Material_#342_0"].geometry}
              material={nodes["Plane066_Material_#342_0"].material}
            />
          </group>
          <group position={[17.87, 114.78, -86.48]} rotation={[0, 0.15, 1.55]}>
            <mesh
              geometry={nodes["Plane067_Material_#342_0"].geometry}
              material={nodes["Plane067_Material_#342_0"].material}
            />
          </group>
          <group
            position={[17.87, 114.78, -86.48]}
            rotation={[3.13, 1.33, -1.58]}
          >
            <mesh
              geometry={nodes["Plane068_Material_#342_0"].geometry}
              material={nodes["Plane068_Material_#342_0"].material}
            />
          </group>
          <group
            position={[36.15, 86.49, -170.93]}
            rotation={[3.11, -1.46, -1.62]}
          >
            <mesh
              geometry={nodes["Plane069_Material_#342_0"].geometry}
              material={nodes["Plane069_Material_#342_0"].material}
            />
          </group>
          <group position={[36.15, 86.49, -170.93]} rotation={[0, -0.72, 1.55]}>
            <mesh
              geometry={nodes["Plane070_Material_#342_0"].geometry}
              material={nodes["Plane070_Material_#342_0"].material}
            />
          </group>
          <group
            position={[36.15, 86.49, -170.93]}
            rotation={[0.01, 1.03, 1.54]}
          >
            <mesh
              geometry={nodes["Plane071_Material_#342_0"].geometry}
              material={nodes["Plane071_Material_#342_0"].material}
            />
          </group>
          <group position={[36.15, 86.49, -170.93]} rotation={[0, -0.02, 1.55]}>
            <mesh
              geometry={nodes["Plane072_Material_#342_0"].geometry}
              material={nodes["Plane072_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-3.14, 86.49, -90.36]}
            rotation={[3.11, -1.46, -1.62]}
          >
            <mesh
              geometry={nodes["Plane073_Material_#342_0"].geometry}
              material={nodes["Plane073_Material_#342_0"].material}
            />
          </group>
          <group position={[-3.14, 86.49, -90.36]} rotation={[0, -0.72, 1.55]}>
            <mesh
              geometry={nodes["Plane074_Material_#342_0"].geometry}
              material={nodes["Plane074_Material_#342_0"].material}
            />
          </group>
          <group
            position={[-3.14, 86.49, -90.36]}
            rotation={[0.01, 1.03, 1.54]}
          >
            <mesh
              geometry={nodes["Plane075_Material_#342_0"].geometry}
              material={nodes["Plane075_Material_#342_0"].material}
            />
          </group>
          <group position={[-3.14, 86.49, -90.36]} rotation={[0, -0.02, 1.55]}>
            <mesh
              geometry={nodes["Plane076_Material_#342_0"].geometry}
              material={nodes["Plane076_Material_#342_0"].material}
            />
          </group>
          <group
            position={[318.39, 79.72, 7.03]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.94, 1, 1]}
          >
            <group position={[-40.77, 0, -123.14]}>
              <mesh
                geometry={nodes["Object003_Material_#211_0"].geometry}
                material={nodes["Object003_Material_#211_0"].material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/island.gltf");
