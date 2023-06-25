import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber'

import { Experience } from './components/Experience';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Canvas
    gl={{
      antialias: false
    }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [3, 2, 6]
    }}>
    <Experience />
  </Canvas>
);
