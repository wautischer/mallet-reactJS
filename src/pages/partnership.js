import react from "react";
import './pages.css';
import Impressum from "../components/Impressum";
import React from "react";

const Partnership = () => {
    return (
        <>
            <div className="container-fluid div-padding-top">
                <h1 className="text-center mb-5 animate-heading">Partnership</h1>
                <section className="py-5">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <img src={process.env.PUBLIC_URL + '/images/partner/synnovation.jpg'}
                                 alt="Synnovation GmbH"/>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                                elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
                                luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                                vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                                eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                                sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Impressum/>
        </>
    )
}
export default Partnership;