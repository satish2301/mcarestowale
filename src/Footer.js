import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri';
import { TiSocialSkype } from 'react-icons/ti';
import { GrLinkedinOption } from 'react-icons/gr'
const Footer = () => {
    return (
        <>
            <div className="footer ">
                <div className="container">
                    <div className="row gy-5 justify-content-evenly">
                        <div className="col-md-4">

                            <h5 data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="2000">ABOUT MCA RESTO WALE</h5>
                            <p data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p data-aos="fade-up" data-aos-duration="2000"
                                >Connect</p>
                            <div className="footer-icon" data-aos="fade-down" data-aos-duration="2000">
                                <span>
                                    <a href="https://www.facebook.com/profile.php?id=100008538941241" target="_blank" ><FaFacebookF /></a>
                                </span>
                                <span>
                                    <a href="#" target="_blank"><AiOutlineTwitter /></a>
                                </span>
                                <span>
                                    <a href="#" target="_blank"><RiWhatsappFill /></a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/satish-chandra-a07aa623a/" target="_blank"><GrLinkedinOption /></a>
                                </span>
                                <span>
                                    <a href="https://www.instagram.com/satishchandra933/" target="_blank"><TiSocialSkype /></a>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h2 data-aos="fade-right" data-aos-duration="2000">Menu List</h2>
                            <p data-aos="fade-up" data-aos-duration="2000">Morning</p>
                            <p data-aos="fade-up" data-aos-duration="2000">Noon</p>
                            <p data-aos="fade-up" data-aos-duration="2000">Evening</p>
                        </div>
                        <div className="col-md-2">
                            <h2 data-aos="fade-left" data-aos-duration="2000">Gallery</h2>
                        </div>
                        <div className="col-md-2">
                            <h2 data-aos="fade-right" data-aos-duration="2000">Contact</h2>
                            <p data-aos="fade-left" data-aos-duration="2000">Majhola Linepar Moradabad</p>
                            <p data-aos="fade-right" data-aos-duration="2000">
                                +1(123)-456-9899, +1(234)-767-667
                            </p>
                            <p data-aos="fade-down" data-aos-duration="2000">info@gmail.com</p>

                        </div>

                    </div>
                    <div className="row ">
                        <div className="col-12 pt-5 text-center" data-aos="fade-up" data-aos-duration="2000">
                            <p>Copyright ©2022 All rights reserved || This website design by satish chandra 😍(developer)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;