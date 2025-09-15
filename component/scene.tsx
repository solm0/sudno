import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import Loader from "./loader";
import { useState, useEffect } from "react";
import { Mesh, MeshStandardMaterial } from "three";
import { LyricsProp } from "@/lyrics";

function Model({
  filename, scale, position, rotation, setLyric, isFound
}: {
  filename: string, scale: number, position: number[], rotation?: number[], setLyric: (name: string) => void, isFound: boolean
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
          if (!isFound) {
            standardMat.emissive.set(hovered ? "red" : "white");
            standardMat.emissiveIntensity = 0.1;
          } else {
            standardMat.emissive.set("red");
            standardMat.emissiveIntensity = hovered ? 0.2 : 0;
          }
        });
      }
    });
  }, [hovered, gltf.scene, isFound]);

  return (
    <primitive
      object={gltf.scene}
      scale={scale}
      position={position} 
      rotation={rotation ?? [0, 0, 0]}
      onPointerOver={(e:MouseEvent) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e:MouseEvent) => {
        e.stopPropagation();
        setHovered(false)
      }}
      onClick={(e:MouseEvent) => {
        e.stopPropagation();
        setLyric(filename.slice(1, -4))
      }}
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
          <Model
            filename='/pol.glb'
            scale={0.93}
            position={[0, -0.05, -0]} 
            setLyric={setLyric}
            isFound={isItFound('pol')}
          />
          <Model
            filename='/lampa.glb'
            scale={0.4}
            position={[0, 0.94, 0]} 
            rotation={[0, Math.PI/2, 0]}
            setLyric={setLyric}
            isFound={isItFound('lampa')}
          />
          <Model
            filename='/okoshko.glb'
            scale={0.3}
            position={[0, 0, -1.33]}
            setLyric={setLyric}
            isFound={isItFound('okoshko')}
          />
          <Model
            filename='/tumbochka.glb'
            scale={0.2}
            position={[-0.1, -0.7, -1.2]}
            setLyric={setLyric}
            isFound={isItFound('tumbochka')}
          />
          <Model
            filename="/krovat.glb"
            scale={0.7}
            position={[-0.61, -0.9, -0.7]}
            setLyric={setLyric}
            isFound={isItFound('krovat')}
          />
          <Model
            filename='/sudno.glb'
            scale={0.12}
            position={[-0.2, -0.86, -0.6]} 
            rotation={[0, 4.2, 0]}
            setLyric={setLyric}
            isFound={isItFound('sudno')}
          />
          <Model
            filename='/stol.glb'
            scale={0.23}
            position={[0.74, -0.72, -0.7]}
            rotation={[0, Math.PI /2, 0]}
            setLyric={setLyric}
            isFound={isItFound('stol')}
          />
          <Model
            filename='/stul.glb'
            scale={0.045}
            position={[0.2, -0.4, -1]} 
            rotation={[0, 0.5, 0]}
            setLyric={setLyric}
            isFound={isItFound('stul')}
          />
          <Model
            filename='/krana.glb'
            scale={0.8}
            position={[0.4, -0.9, 0.8]} 
            rotation={[0, Math.PI, 0]}
            setLyric={setLyric}
            isFound={isItFound('krana')}
          />
          <Model
            filename='/zerkalo.glb'
            scale={0.4}
            position={[0.4, -0.1, 0.92]} 
            rotation={[0, 0, 0]}
            setLyric={setLyric}
            isFound={isItFound('zerkalo')}
          />
          <Model
            filename='/dver.glb'
            scale={0.006}
            position={[-0.4, -0.92, 0.92]} 
            setLyric={setLyric}
            isFound={isItFound('dver')}
          />

          {/* Controls to move camera with mouse */}
          <OrbitControls
            minDistance={0}
            maxDistance={1}
          />
        </Suspense>
      </Canvas>

      {modalData &&
        <div className="absolute w-96 h-72 z-10 bg-black border border-white flex flex-col items-center justify-between p-12">
          <div className="relative w-72 h-auto grow flex flex-col text-center">
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