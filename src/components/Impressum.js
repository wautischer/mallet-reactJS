import React from "react";
import './components.css';
import '../pages/pages.css'

const Impressum = () => {

    return (
        <div className={"p-4 bg-transparent text-white text-center"}>
            <div className={"row"}>
                <div className={"col-sm-4 d-none d-md-block"}>
                    <label>Mallet</label>
                    <button className="btn btn-dark text-white disabled bg-transparent border-0">Kärnten, Österreich</button>
                </div>
                <div className={"col-sm-4"}>
                    <button
                        type="button"
                        className="btn btn-dark bg-transparent border-0 text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        Impressum
                    </button>
                </div>
                <div className={"col-sm-4 d-none d-md-block"}>
                    <label>Kontakt</label><a href="mailto:office@mallet.at">
                    <button className="btn btn-dark text-white bg-transparent disabled border-0">office@mallet.at</button>
                </a>
                </div>
            </div>

            <div className="modal fade bg-transparent blur-background" id="myModal">
                <div className="modal-dialog modal-xl">
                    <div className="modal-conten">
                        <div className="modal-header text-white border-0">
                            <h4 className="modal-title"><span className="animate-text">Impressum</span></h4>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body text-white text-start border-0">
                            <p><label><b>Company Name: </b>Mallet</label></p>
                            <p><label><b>Legal Form: </b>Junior Company</label></p>
                            <p><label><b>Address: </b>Mössingerstraße 25 / 9020 Klagenfurt CARINTHIA</label></p>
                            <p><label><b>Phone Number: </b>+436601626565</label></p>
                            <p><label><b>Email Address: </b><a href="mailto:office@mallet.at">office@mallet.at</a></label></p>
                            <p><label><b>Name of CEO: </b>Simon Hürlimann</label></p>
                            <p><label><b>Registration Number: </b>1241</label></p>
                            <p><label><b>Regulatory Authority: </b>Junior Achievement Austria</label></p>
                            <p>
                                Junior (Basic or Compact) Companies are real businesses established by students aged 15
                                to 19 as part of a school project, ranging from one semester to an entire school year.
                                They are not subject to trade or commercial law but operate under the specific
                                regulations of Junior Achievement Austria. For more information on Junior Achievement
                                Austria – Students Establish Companies, please visit <a
                                href="https://www.junior.cc">www.junior.cc</a>.
                            </p>
                            <p>
                                The school project Junior Company was initiated by Economic Societies and is conducted
                                and monitored by the association Junior Achievement Austria. Therefore, the association
                                serves as the point of contact for legal inquiries.
                            </p>
                            <b>© 2024 Mallet</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
