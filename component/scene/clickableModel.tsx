import { useState, useEffect } from "react";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";

export default function ClickableModel({
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