import React from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { OBJLoader } from "three/addons/loaders/OBJLoader";

function MyRotatingBox() {
    const myMesh = React.useRef();
    const obj = useLoader(OBJLoader, process.env.PUBLIC_URL + '/3dModel/cardholderObj.obj');

    useFrame(({ clock }) => {
        const elapsedTime = -clock.getElapsedTime();
        myMesh.current.rotation.y = elapsedTime;
    });

    return (
        <mesh ref={myMesh}>
            <primitive object={obj} />
        </mesh>
    );
}

export default function ObjViewer() {
    return (
        <div style={{ width: "700px", height: "600px" }}>
            <Canvas
                camera={{ position: [90, 50, 180], fov: 50 }}
                className="obj_frame"
            >
                <MyRotatingBox />
                <ambientLight intensity={0.3} />
                <directionalLight intensity={0.5} position={[0, 0, 255]} />
            </Canvas>
        </div>
    );
}
