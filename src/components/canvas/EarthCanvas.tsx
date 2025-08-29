import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    OrbitControls,
    Preload,
    useGLTF
} from '@react-three/drei';

import CanvasLoader from '../CanvasLoader';

const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf');

    return (
        <primitive
            object={earth.scene}
            scale={15.0}
            position-y={0}
            rotation-y={Math.PI / 2}
        />
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 1000,
                position: [25, 8, 25],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} intensity={1.5} />
            <OrbitControls 
                autoRotate
                enableZoom={false} 
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <Earth />
            <Preload all />
            </Suspense>
        </Canvas>
    )
}

export default EarthCanvas;