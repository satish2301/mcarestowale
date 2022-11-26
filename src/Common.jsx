import React from "react";
import { BsFacebook } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri'
import { ImTwitter } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai'

const Comman = (props) => {
    return (

        <>
            <div className="hero-part container-fluid">
                <div className="row">
                    <div className="col-7 mx-auto">
                        <h5 className="text-center"
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">{props.title1}</h5>

                        <h1 className="text-center hero-heading2"
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >{props.title2}</h1>

                        <p className="text-center"
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >{props.title3}</p>
                    </div>
                    <div className="text-center" data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <a href="https://www.crazymasalafood.com/top-20-restaurants-moradabad/" rel="noreferrer" target="_blank"><button className="btn btn-warning">{props.btn}</button></a></div>

                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-12 text-white icon icon-part">
                            <ul className="d-flex list-unstyled justify-content-end">
                                <li data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"><a href="https://www.facebook.com/profile.php?id=100008538941241" target="_blank"><BsFacebook /></a></li>
                                <li data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"><a href="#" target="_blank"><RiWhatsappFill /></a></li>
                                <li data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"><a href="#" target="_blank"><ImTwitter /></a></li>
                                <li data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"><a href="https://www.instagram.com/satishchandra933/" target="_blank"><AiFillInstagram /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}
export default Comman;