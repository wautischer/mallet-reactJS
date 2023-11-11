import React, {useRef, useEffect, Suspense} from 'react';
import {Canvas, useLoader} from 'react-three-fiber';
import {OBJLoader} from 'three/addons/loaders/OBJLoader';
import {extend, useThree, useFrame} from 'react-three-fiber';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {useDrag} from 'react-use-gesture';
import './components.css';

extend({OrbitControls});

const Controls = () => {
    const {camera, gl} = useThree();
    const controls = useRef();

    const bind = useDrag(({movement: [dx, dy]}) => {
        controls.current.rotateLeft((dx / window.innerWidth) * 4);
        controls.current.rotateUp((dy / window.innerHeight) * 4);
    });

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
    return <primitive object={obj}/>;
};

const ObjViewer = ({width, height}) => {
    const groupRef = useRef();

    return (
        <Canvas
            style={{width: `${width}px`, height: `${height}px`}}
            camera={{position: [90, 50, 180], fov: 50}}
            className={'obj_frame'}
        >
            <Controls/>
            <group ref={groupRef} position={[0, 20, 0]}>
                <ambientLight intensity={0.5}/>
                <directionalLight intensity={2.5} position={[0, 0, 5]}/>
                <Suspense fallback={null}>
                    <Model/>
                </Suspense>
            </group>
        </Canvas>
    );
};

export default ObjViewer;