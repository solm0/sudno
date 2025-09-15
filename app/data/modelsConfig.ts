interface ModelsConfigProps {
  name: string;
  scale: number;
  position: number[];
  rotation?: number[];
}

export const ModelsConfig: ModelsConfigProps[] = [
  {
    name: 'pol',
    scale: 0.93,
    position: [0, -0.05, -0],
  },
  {
    name: 'lampa',
    scale: 0.4,
    position: [0, 0.94, 0],
    rotation: [0, Math.PI/2, 0],
  },
  {
    name: 'okoshko',
    scale: 0.3,
    position: [0, 0, -1.33],
  },
  {
    name: 'tumbochka',
    scale: 0.2,
    position: [-0.1, -0.7, -1.2],
  },
  {
    name: 'krovat',
    scale: 0.7,
    position: [-0.61, -0.9, -0.7],
  },
  {
    name: 'sudno',
    scale: 0.12,
    position: [-0.2, -0.86, -0.6],
    rotation: [0, 4.2, 0],
  },
  {
    name: 'stol',
    scale: 0.23,
    position: [0.74, -0.72, -0.7],
    rotation: [0, Math.PI /2, 0],
  },
  {
    name: 'stul',
    scale: 0.045,
    position: [0.2, -0.4, -1],
    rotation: [0, 0.5, 0]
  },
  {
    name: 'krana',
    scale: 0.8,
    position: [0.4, -0.9, 0.8],
    rotation: [0, Math.PI, 0],
  },
  {
    name: 'zerkalo',
    scale: 0.4,
    position: [0.4, -0.1, 0.92],
  },
  {
    name: 'dver',
    scale: 0.006,
    position: [-0.4, -0.92, 0.92],
  },
]