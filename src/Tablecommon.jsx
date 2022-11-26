import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
const Tablecommon = (props) => {
    return (
        <>
            <Modal />
            <div className="col-12 offset-3 offset-sm-1 ">
                <div className="row justify-content-evenly">
                    <div className="col-md-5 gy-5" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card">
                            <img src={props.imgsrc1} alt="card-img" width="350px" height="200px" />

                        </div>
                        <div className="text-center mt-3">
                            <p>{props.name1}</p>
                            <p className="fw-bold">{props.price1}</p>
                            <NavLink className="btn btn-outline-dark" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{props.button1}</NavLink>
                        </div>
                    </div>
                    <div className="col-md-5 gy-5" data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card">
                            <img src={props.imgsrc2} alt="card-img" width="350px" height="200px" />

                        </div>
                        <div className="text-center mt-3">
                            <p>{props.name2}</p>
                            <p className="fw-bold">{props.price2}</p>
                            <NavLink className="btn btn-outline-dark" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{props.button2}</NavLink>

                        </div>
                    </div>
                </div>
                <div className="row justify-content-evenly">
                    <div className="col-md-5 col-sm-12 gy-3" data-aos="flip-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card">
                            <img src={props.imgsrc3} alt="card-img" width="350px" height="200px" />
                        </div>
                        <div className="text-center mt-3">
                            <p>{props.name3}</p>
                            <p className="fw-bold">{props.price3}</p>
                            <NavLink className="btn btn-outline-dark" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">BOOK A TABLE 3</NavLink>

                        </div>
                    </div>
                    <div className="col-md-5  col-sm-12 gy-3" data-aos="flip-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card">
                            <img src={props.imgsrc4} alt="card-img" width="350px" height="200px" />

                        </div>
                        <div className="text-center mt-3">
                            <p>{props.name4}</p>
                            <p className="fw-bold">{props.price4}</p>
                            <NavLink className="btn btn-outline-dark" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">BOOK A TABLE 4</NavLink>

                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}
export default Tablecommon;