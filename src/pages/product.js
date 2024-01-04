import React, {useState, useEffect} from 'react';
import './pages.css';
import ObjViewer from "../components/Viewer3D";
import Reviews from "../components/Reviews";
import Impressum from "../components/ImpressumComponent";

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
                <h1 className="text-center mb-5 animate-heading">Products and Reviews</h1>
                <section className="py-5">
                    <h3>Cardholder <span className="animate-text">V1.0</span></h3>
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
                                <ObjViewer documentName={process.env.PUBLIC_URL + '/3dModel/cardholderObj.obj'}/>}
                        </div>
                    </div>
                </section>
                <section className="py-sm-5">
                    <h3>Cardholder <span className="animate-text">V2.0</span></h3>
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
                <section className="py-5">
                    <h3>Reviews <span className="animate-text">&</span> Feedback</h3>
                    <Reviews/>
                    <div className="row-cols-12 text-center pt-2">
                        <a href="mailto:feedback@mallet.at?subject=Feedback">
                            <button className="btn btn-dark text-white">Send Us feedback</button>
                        </a>
                    </div>
                </section>
            </div>
            <Impressum/>
        </>
    );
};

export default Product;
