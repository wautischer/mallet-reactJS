import React from 'react';
import './pages.css';
import ObjViewer from "../components/Viewer3D";

const Product = () => {
    return (
        <>
            <div className={"container css_div_padding_top"}>
                <h1 className="text-center mb-5">Product Preview and Details</h1>
                <section className="py-5">
                    <h3>V1 Cardholder</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <p>Some very detailed details.</p>
                        </div>
                        <div className="col-sm-6">
                            <ObjViewer documentName={process.env.PUBLIC_URL + '/3dModel/cardholderObj.obj'}/>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <h3>V2 Cardholder</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <p>Some very detailed details.</p>
                        </div>
                        <div className="col-sm-6">
                            <ObjViewer documentName={process.env.PUBLIC_URL + '/3dModel/cardholderObjV2.obj'}/>
                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default Product;
