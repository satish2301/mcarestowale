import React from "react";
import Comman from "./Common";
import Birthday from "./Birthday";
import Familyparty from "./Familyparty";
import Coupleparty from "./Coupleparty";
import Weaklyparty from "./Weaklyparty";
import Footer from "./Footer";

const Onlinebook = () => {

    const birthdayhandle = () => {
        document.getElementById("birthday").style.display = "block";
        document.getElementById("family").style.display = "none";
        document.getElementById("couple").style.display = "none";
        document.getElementById("weakly").style.display = "none";
    }

    const familyhandle = () => {
        document.getElementById("family").style.display = "block";
        document.getElementById("birthday").style.display = "none";
        document.getElementById("couple").style.display = "none";
        document.getElementById("weakly").style.display = "none";
    }
    const couplehandle = () => {
        document.getElementById("couple").style.display = "block";
        document.getElementById("weakly").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("birthday").style.display = "none";
    }
    const weaklyhandle = () => {
        document.getElementById("weakly").style.display = "block";
        document.getElementById("family").style.display = "none";
        document.getElementById("couple").style.display = "none";
        document.getElementById("birthday").style.display = "none";
    }
    return (
        <>
            <Comman title1='ENJOY YOUR TIME'
                title2="BOOK A TABLE"
                title3="Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.e"
                btn="EXPLORE NOW" />
            <section className="food-item">
                <div className="row py-5 ">
                    <div className=" col-md-10 mx-auto">
                        <div className="row">
                            <div className="col-md-3">
                                <h5 className="food-muted" data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">Your Choice</h5>
                                <h4 className="food-heading" data-aos="fade-left"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">BEST <span>RESTO</span></h4>
                                <div className="pt-5">
                                    <div className="" onClick={birthdayhandle}>
                                        <div className="left-card-name">
                                            <p className="fw-bold fs-5" data-aos="flip-left"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="2000">BIRTHDAY PARTY 😋</p>
                                        </div>

                                    </div>
                                    <div onClick={couplehandle}>
                                        <div className="left-card-name">
                                            <p className="fw-bold fs-5" data-aos="flip-right"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="2500">COUPLE PARTY 💏</p>
                                        </div>
                                    </div>
                                    <div onClick={familyhandle}>
                                        <div className="left-card-name">
                                            <p className="fw-bold fs-5" data-aos="flip-left"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="1500">FAMILY PARTY👨‍👩‍👦‍👦</p>
                                        </div>
                                    </div>
                                    <div onClick={weaklyhandle}>
                                        <div className="left-card-name">
                                            <p className="fw-bold fs-5" data-aos="flip-right"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="300npx 0">WEAKLY PARTY 👯‍♂️</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <Birthday />
                                <Familyparty />
                                <Coupleparty />
                                <Weaklyparty />
                            </div>



                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
export default Onlinebook;