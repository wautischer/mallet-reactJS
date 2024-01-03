import React from "react";
import {Canvas, useFrame, useLoader} from "react-three-fiber";
import {OBJLoader} from "three/addons/loaders/OBJLoader";

function Viewer3D(props) {
    const myMesh = React.useRef();
    const obj = useLoader(OBJLoader, props.documentName);

    useFrame(({ clock }) => {
        myMesh.current.rotation.y = -0.4 * clock.getElapsedTime();
    });

    return (
        <mesh ref={myMesh} position={[0, 15, 0]}>
            <primitive object={obj} />
        </mesh>
    );
}

export default function ObjViewer(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Canvas
                        style={{ width: "100%", height: "400px" }}
                        camera={{ position: [0, 0, 180], fov: 50 }}
                    >
                        <Viewer3D documentName={props.documentName} />
                        <ambientLight intensity={0.3} />
                        <directionalLight intensity={0.5} position={[0, 0, 25]} />
                    </Canvas>
                </div>
            </div>
        </div>
    );
}
