import React from "react";
import Slider1 from './Image/slider1.jpg';
import Slider2 from './Image/slider2.jpg';
import Slider3 from './Image/slider3.jpg';
import testimonal1 from './Image/testimonal1.webp'
import testimonal2 from './Image/testimonal2.webp'
import testimonal3 from './Image/testimonal3.webp'
import testimonal4 from './Image/testimonal4.jpg'


const Testmonal = () => {

    return (
        <>
            <div className="container-fluid  testmonal ">
                <div className="overlay-back-test">
                    <div className="container py-sm-5 py-0">
                        <div className="row ">
                            <div className="col-md-5">
                                <p className="food-muted" data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">TESTIMONIALS</p>
                                <h1 data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">Satisfied <span style={{ color: "#ff5200" }}> Customers</span></h1>
                                <div className="row justify-content-evenly">
                                    <div className="col-12" data-aos="flip-up"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000">
                                        <div id="carouselExampleCaptions" class="carousel  slide" data-bs-ride="carousel">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div class="carousel-inner slider rounded">
                                                <div class="carousel-item active">
                                                    <img src={Slider1} class="d-block w-100" alt="..." />
                                                    <div class="carousel-caption d-none d-md-block">
                                                        <h5>SATISH CHANDRA (DEVELOPER)</h5>

                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <img src={Slider2} class="d-block w-100" alt="..." />
                                                    <div class="carousel-caption d-none d-md-block">
                                                        <h5>KAUSHAL CHAUHAN</h5>

                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <img src={Slider3} class="d-block w-100" alt="..." />
                                                    <div class="carousel-caption d-none d-md-block">
                                                        <h5>VISHAL SINGH</h5>

                                                    </div>
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <p className="food-muted" data-aos="fade-left"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">GALLERIES</p>
                                <h2 data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">Photo<span style={{ color: "#ff5200" }}> Galleries</span></h2>
                                <div className="row gy-3 mt-4">
                                    <div className="col-md-6" data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000">
                                        <div className="testimonal-card">
                                            <img src={testimonal1} />
                                        </div>
                                    </div>
                                    <div className="col-md-6" data-aos="flip-up"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000">
                                        <div className="testimonal-card">
                                            <img src={testimonal2} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 gy-3">
                                    <div className="col-md-6" data-aos="flip-right"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000">
                                        <div className="testimonal-card">
                                            <img src={testimonal3} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3" data-aos="flip-down"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000">
                                        <div className="testimonal-card">
                                            <img src={testimonal4} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Testmonal;
