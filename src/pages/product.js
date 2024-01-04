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
                        <div className="col-sm-6 custom-height">
                            <p>The V1.0 edition combines a robust plastic case with a
                                distinctive custom logo plate crafted from premium aluminium. This amalgamation of
                                materials ensures a perfect balance between durability and aesthetics, making it an
                                ideal choice for those who appreciate both style and functionality.
                            </p>
                            <p><b>Pros</b></p>
                            <div>
                                <ol>
                                    <li><b>Distinguished Aesthetics:</b> The custom logo plate crafted from aluminium adds a premium and distinct look to the cardholder.</li>
                                    <li><b>Durable Build:</b> The combination of plastic and aluminium ensures a robust and long-lasting construction.</li>
                                    <li><b>Versatile Usage:</b> Suitable for those who prioritize both style and functionality in their everyday carry.</li>
                                </ol>
                            </div>
                            <p><b>Cons</b></p>
                            <div>
                                <ol>
                                    <li><b>Weight:</b> The aluminium components may contribute to a slightly heavier feel compared to an all-plastic alternative.</li>
                                    <li><b>Material Composition:</b> While the custom logo plate is aluminium, the case is made of plastic, offering a compromise in material consistency.</li>
                                </ol>
                            </div>
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
                        <div className="col-sm-6 custom-height">
                            <p>In our V2.0 edition, we have retained the durable plastic case
                                while introducing enhancements. The slider mechanism, a key feature of the Mallet
                                Cardholder, and the custom logo plate are meticulously crafted from high-quality
                                aluminium. This not only adds a touch of elegance but also ensures smooth functionality,
                                setting the V2.0 apart as a refined and premium accessory.
                            </p>
                            <p><b>Pros</b></p>
                            <div>
                                <ol>
                                    <li><b>Enhanced Slider Mechanism:</b> The slider, a key component, is now crafted from durable aluminium, ensuring smooth and reliable usage.</li>
                                    <li><b>Simplified Design:</b> The V2.0 maintains a sleek and minimalist appearance, focusing on functionality without compromising on style.</li>
                                    <li><b>Aluminium Logo Plate:</b> The custom logo plate, made from aluminium, adds a touch of sophistication to the cardholder.</li>
                                </ol>
                            </div>
                            <p><b>Cons</b></p>
                            <div>
                                <ol>
                                    <li><b>Material Consistency:</b> While the slider and logo plate are aluminium, the case remains plastic, offering a balance between weight and durability.</li>
                                    <li><b>Similar Design:</b> The overall design may not show significant divergence from the V1.0 version, potentially limiting the appeal to those seeking a radically different look.</li>
                                </ol>
                            </div>
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
                    <h3 className="div-padding-top">Reviews <span className="animate-text">&</span> Feedback</h3>
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
