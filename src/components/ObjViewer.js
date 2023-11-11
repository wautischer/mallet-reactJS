import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { OBJLoader } from 'three/addons/loaders/OBJLoader';
import { extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useDrag } from 'react-use-gesture';
import './components.css';

extend({ OrbitControls });

const Controls = () => {
    const { camera, gl } = useThree();
    const controls = useRef();

    const bind = useDrag(
        ({ movement: [dx, dy], event, cancel, down }) => {
            // Check if the event is a touch event
            const isTouch = event.touches && event.touches.length === 1;

            // If it's not a touch event, use the mouse controls
            if (!isTouch) {
                controls.current.rotateLeft((dx / window.innerWidth) * 4);
                controls.current.rotateUp((dy / window.innerHeight) * 4);
            }

            // If it's a touch event, use pinch to zoom and drag to move
            if (event.touches && event.touches.length === 2) {
                const [touch1, touch2] = event.touches;
                const distance = Math.hypot(
                    touch1.clientX - touch2.clientX,
                    touch1.clientY - touch2.clientY
                );

                // Zoom based on the pinch distance
                controls.current.dollyToZoom(true, distance / 2);

                // Cancel the drag gesture
                cancel();
            } else {
                // Drag to move for touch events
                controls.current.rotateLeft((dx / window.innerWidth) * 4);
                controls.current.rotateUp((dy / window.innerHeight) * 4);
            }
        },
        {
            // Enable touch events
            touch: true,
            // Allow wheel events to pass through so they don't interfere with touch gestures
            wheel: { enabled: false },
        }
    );

    useEffect(() => {
        if (controls.current) {
            controls.current.minDistance = 50;
            controls.current.maxDistance = 360;
            controls.current.autoRotate = true;
            controls.current.autoRotateSpeed = -1;
        }
    }, []);

    useFrame(() => controls.current.update());

    return <orbitControls ref={controls} args={[camera, gl.domElement]} enableZoom="" {...bind()} />;
};

const Model = () => {
    const obj = useLoader(OBJLoader, process.env.PUBLIC_URL + '/3dModel/cardholderObj.obj');
    return <primitive object={obj} />;
};

const ObjViewer = ({ width, height }) => {
    return (
        <Canvas
            style={{ width: `${width}px`, height: `${height}px` }}
            camera={{ position: [90, 50, 180], fov: 50 }}
            className={'obj_frame'}
        >
            <Controls />
            <group position={[0, 20, 0]}>
                <ambientLight intensity={0.5} />
                <directionalLight intensity={2.5} position={[0, 0, 5]} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </group>
        </Canvas>
    );
};

export default ObjViewer;