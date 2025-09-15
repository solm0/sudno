import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import Loader from "./loader";
import { useState, useEffect } from "react";
import { Mesh, MeshStandardMaterial } from "three";

function Model({
  filename, scale, position, rotation
}: {
  filename: string, scale: number, position: number[], rotation?: number[]
}) {
  const gltf = useLoader(GLTFLoader, filename);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach((mat) => {
          const standardMat = mat as MeshStandardMaterial;
          standardMat.emissive.set("white");
          standardMat.emissiveIntensity = hovered ? 0.5 : 0;
        });
      }
    });
  }, [hovered, gltf.scene]);

  return (
    <primitive
      object={gltf.scene}
      scale={scale}
      position={position} 
      rotation={rotation ?? [0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => alert(filename.slice(1, -4))}
    />
  )
}

function Komnata() {
  const gltf = useLoader(GLTFLoader, '/komnata.glb');
  return (
    <primitive
      object={gltf.scene}
      scale={1}
    />
  )
}

function Sudno() {
  return (
    <Model
      filename='/sudno.glb'
      scale={0.12}
      position={[0.3, -0.9, -1.2]} 
      rotation={[0, 4.5, 0]}
    />
  )
}

function Okoshko() {
  return (
    <Model
      filename='/okoshko.glb'
      scale={0.3}
      position={[0, 0, -1.33]}
    />
  )
}

function Tumbochka() {
  return (
    <Model
      filename='/tumbochka.glb'
      scale={0.2}
      position={[0.61, -0.74, -1.3]}
    />
  )
}

function Krovat() {
  return (
    <Model
      filename="/krovat.glb"
      scale={0.7}
      position={[-0.61, -0.95, -0.6]}
    />
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
      <Suspense fallback={<Loader />}>
        {/* Light */}
        <ambientLight intensity={0.5} />
        <pointLight 
          position={[0, 0, -1.31]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />

        {/* Model */}
        <Komnata />
        <Okoshko />
        <Tumbochka />
        <Krovat />
        <Sudno />

        {/* Controls to move camera with mouse */}
        <OrbitControls
          minDistance={0}
          maxDistance={1}
        />
      </Suspense>
    </Canvas>
  );
}