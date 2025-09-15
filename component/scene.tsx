import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import Loader from "./loader";
import { LyricsProp } from "@/app/data/lyrics";
import Modal from "./scene/modal";
import ClickableModel from "./scene/clickableModel";
import { ModelsConfig } from "@/app/data/modelsConfig";

function Komnata() {
  const gltf = useLoader(GLTFLoader, '/komnata.glb');
  return (
    <primitive
      object={gltf.scene}
      scale={1}
    />
  )
}

export default function Scene({
  lyric,
  setLyric,
  markFound,
  fullLyric,
}: {
  lyric: string | null;
  setLyric: (name: string | null) => void;
  markFound: (name: string) => void;
  fullLyric: LyricsProp[];
}) {
  const modalData = fullLyric.find(l => l.name === lyric);

  function isItFound (name: string){
    return fullLyric.find(l => l.name === name)?.isFound ?? false;
  }
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          {/* Light */}
          <ambientLight intensity={0.5} />
          <pointLight 
            position={[0, 0, 0]} 
            intensity={0.6} 
            castShadow 
            shadow-mapSize-width={1024} 
            shadow-mapSize-height={1024} 
          />

          {/* Models */}
          <Komnata />
          {ModelsConfig.map(model => (
            <ClickableModel 
              key={model.name}
              filename={`/${model.name}.glb`}
              scale={model.scale}
              position={model.position}
              rotation={model.rotation}
              setLyric={setLyric}
              isFound={isItFound(model.name)}
            />
          ))}

          {/* Controls to move camera with mouse */}
          <OrbitControls
            minDistance={0}
            maxDistance={1}
          />
        </Suspense>
      </Canvas>

      {modalData &&
        <Modal
          modalData={modalData}
          markFound={markFound}
          setLyric={setLyric}
        />}
    </div>
  );
}