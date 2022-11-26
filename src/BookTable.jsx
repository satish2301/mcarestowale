import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
const BookTable = () => {
    return (
        <>
            <div className="book-table">
                <div className="book-table-overllay">
                    <div className="row">
                        <div className="col-12 text-center book-table-data">
                            <p className="muted" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000">EVENTS</p>
                            <h2 data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">Enjoy <span>Our Events</span></h2>
                            <p data-aos="fade-down"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">Far far away, behind the word mountains,<br /> far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                            <NavLink to="/onlinebook" ><button className="table-btn" data-aos="fade-up"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="3000">BOOK A TABLE</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default BookTable;