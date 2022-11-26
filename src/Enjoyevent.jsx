import React from "react";
import enjoy1 from './Image/enjoy1.webp'
import enjoy2 from './Image/enjoy2.webp'

const Enjoyevent = () => {
    return (

        <>
            <div className="container-fluid enjoy-event ">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="muted" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">EVENTS</p>
                        <h2 data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Enjoy <span>Our Events</span></h2>
                        <p data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="2000">Far far away, behind the word mountains,<br /> far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className="container py-5 ">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row justify-content-evenly">
                                    <div className="col-md-6">
                                        <img src={enjoy1} class="d-block w-100" alt="..." />
                                    </div>
                                    <div className="col-md-5">
                                        <p style={{ color: "#ff5200",fontSize:"25px" }}>₹999/-</p>
                                        <h2>Birthday Party</h2>
                                        <p className="muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        <ul className="muted">
                                            <li>Away behind the word</li>
                                            <li>Bookmarksgrove right at the coast</li>
                                            <li>Separated they live</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="carousel-item">
                                <div className="row">
                                    <div className="col-md-5">
                                    <p style={{ color: "#ff5200",fontSize:"25px" }}>₹1200.99</p>
                                        <h2>Birthday Party</h2>
                                        <p className="muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        <ul className="muted">
                                            <li>Away behind the word</li>
                                            <li>Bookmarksgrove right at the coast</li>
                                            <li>Separated they live</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={enjoy2} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
           
        </>
    );
}
export default Enjoyevent;