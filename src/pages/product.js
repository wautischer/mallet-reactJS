import React from 'react';
import './pages.css';
import ObjViewer from "../components/ObjViewer";

const Product = () => {
    return (
        <>
            <div className={"container-fluid mt-3 css_div_padding_top"}>
                <h1>Product Preview and Details</h1>
            </div>
            <div className="container-center align-items-center d-flex justify-content-center">
                <div className="d-none d-md-block">
                    <ObjViewer width={700} height={700} />
                </div>
            </div>
        </>

    );
};

export default Product;
