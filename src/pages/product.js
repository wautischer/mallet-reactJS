import React, {useState, useEffect} from 'react';
import './pages.css';
import ObjViewer from "../components/Viewer3D";

const Product = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoader(false);
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className={"container div-padding-top"}>
                <h1 className="text-center mb-5">Product Preview and Details</h1>
                <section className="py-5">
                    <h3>V1 Cardholder</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="custom-height">Some very detailed details.</p>
                        </div>
                        <div className="col-sm-6 position-relative">
                            {showLoader && (
                                <div className="loader-container loader-margin-top">
                                    <div className="loader"></div>
                                </div>
                            )}
                            {!showLoader && <ObjViewer documentName={process.env.PUBLIC_URL + '/3dModel/cardholderObj.obj'} />}
                        </div>

                    </div>
                </section>
                <section className="py-sm-5">
                    <h3>V2 Cardholder</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="custom-height">Some very detailed details.</p>
                        </div>
                        <div className="col-sm-6 position-relative">
                            {showLoader && (
                                <div className="loader-container loader-margin-top">
                                    <div className="loader"></div>
                                </div>
                            )}
                            {!showLoader &&
                                <ObjViewer documentName={process.env.PUBLIC_URL + '/3dModel/cardholderObjV2.obj'}/>}
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default Product;
