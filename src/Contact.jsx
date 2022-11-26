import React, { useState,useRef } from "react";

import emailjs from '@emailjs/browser';
import Comman from "./Common";
import Footer from "./Footer";
import { ImLocation2 } from 'react-icons/im'
import { MdMarkEmailRead } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { IoIosCall } from 'react-icons/io';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ulcp3ge', 'template_o1pr46e', form.current, 'WDmxRro99KUu2ccuw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <>
            <Comman title1='GET IN TOUCH'
                title2="Contact Us"
                title3="Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.e"
                btn="EXPLORE NOW" />
            <div className="container-fluid contact-form">
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-md-4">
                            <div className="location d-flex">
                                <div className="location-icon">
                                    <ImLocation2 style={{ fontSize: "34px" }} />
                                </div>
                                <div className="location-data">
                                    <p>Location: <br />
                                        Majhola Linepar Moradabad</p>
                                </div>
                            </div>

                            <div className="hour d-flex mt-2">
                                <div className="location-icon">
                                    <BiTime style={{ fontSize: "34px" }} />
                                </div>
                                <div className="location-data">
                                    <p>Open Hours: <br />
                                        Sunday - Friday:

                                        11:00 -2300 PM
                                    </p>
                                </div>
                            </div>

                            <div className="email mt-2">
                                <div className=" d-flex">
                                    <div className="location-icon">
                                        <MdMarkEmailRead style={{ fontSize: "34px" }} />
                                    </div>
                                    <div className="location-data">
                                        <p>Email: <br />
                                            info@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="call mt-2">
                                <div className=" d-flex">
                                    <div className="location-icon">
                                        <IoIosCall style={{ fontSize: "34px" }} />
                                    </div>
                                    <div className="location-data">
                                        <p>Location: <br />
                                            Majhola Linepar Moradabad</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className=" name-part">
                                    <input type="text" placeholder="First Name" name="user_fname" required  />
                                    <input type="text" style={{ marginLeft: "146px" }} placeholder="Last Name" name="user_lname" required />
                                </div>
                                <div className="mt-4">
                                    <input type="email" className="w-100" placeholder="Email" name="user_email" required  />
                                </div>
                                <div className="mt-4">
                                    <textarea className="w-100 h-50" placeholder="Message" name="message" required ></textarea>
                                </div>
                                <div className="mt-4">
                                    <button className="sendbtn" value="Send">SEND MESSAGE</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Contact;