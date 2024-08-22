import React from "react";
import { Link } from "react-router-dom";

let ViewContact = () => {
    return(
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe beatae aliquam quaerat. Tenetur ipsam consequuntur, quidem eveniet voluptates voluptate, vel porro perspiciatis quo minima officia, provident aperiam reprehenderit. Ut, doloremque.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" className="contact-img" />
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    Name : <span className="fw-bold">Raj</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Mobile : <span className="fw-bold">9123456789</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Email : <span className="fw-bold">raj@gmail.com</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Company : <span className="fw-bold">RSA</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Title : <span className="fw-bold">Frontend Developer</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Group : <span className="fw-bold">O+ve</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ViewContact;