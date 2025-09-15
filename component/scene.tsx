import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import Loader from "./loader";
import { useState, useEffect } from "react";
import { Mesh, MeshStandardMaterial } from "three";
import { Lyrics, LyricsProp } from "@/lyrics";
import clsx from "clsx";

function Model({
  filename, scale, position, rotation, setLyric,
}: {
  filename: string, scale: number, position: number[], rotation?: number[], setLyric: (name: string) => void
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
      onClick={() => setLyric(filename.slice(1, -4))}
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
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
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

          {/* Models */}
          <Komnata />
          <Model
            filename='/okoshko.glb'
            scale={0.3}
            position={[0, 0, -1.33]}
            setLyric={setLyric}
          />
          <Model
            filename='/tumbochka.glb'
            scale={0.2}
            position={[0.61, -0.74, -1.3]}
            setLyric={setLyric}
          />
          <Model
            filename="/krovat.glb"
            scale={0.7}
            position={[-0.61, -0.95, -0.6]}
            setLyric={setLyric}
          />
          <Model
            filename='/sudno.glb'
            scale={0.12}
            position={[0.3, -0.9, -1.2]} 
            rotation={[0, 4.5, 0]}
            setLyric={setLyric}
          />

          {/* Controls to move camera with mouse */}
          <OrbitControls
            minDistance={0}
            maxDistance={1}
          />
        </Suspense>
      </Canvas>

      {modalData &&
        <div className="absolute w-96 h-72 bg-black border border-white flex flex-col items-center justify-between p-12">
          <div className="relative w-52 h-auto text-center">

            {modalData.lyric.map(p => (
              <div
                key={p.ru}
                className="h-14 font-mono text-sm pt"
              >
                <p>{p.ru}</p>
                <p className="text-xs pt-1">{p.kr}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 text-sm font-mono">
            <button
              className={`px-4 py-0.5 border border-white ${modalData.isFound ? 'opacity-30' : 'opacity-100 hover:bg-white hover:text-black'}`}
              onClick={() => markFound(modalData.name)}
              disabled={modalData.isFound}
            >
              {modalData.isFound ? 'saved' : 'save'}
            </button>
            <button
              className="px-4 py-0.5 border border-white hover:bg-white hover:text-black"
              onClick={() => setLyric(null)}
            >close</button>
          </div>
        </div>
      }
    </div>
  );
}