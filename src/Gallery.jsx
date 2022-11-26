import React from "react";
import Comman from "./Common";
import Footer from './Footer';
import gallery1 from './Image/gallery1.webp'
import gallery2 from './Image/gallery2.jpg'
import gallery3 from './Image/gallery3.jpg'
import gallery4 from './Image/gallery4.webp'
import gallery5 from './Image/gallery5.webp'
import gallery6 from './Image/gallery6.webp'
import gallery7 from './Image/gallery7.jpg'
import gallery8 from './Image/gallery8.webp'
import gallery9 from './Image/gallery9.jpg'
// import gallery10 from './Image/gallery.webp'
const Gallery = () => {
    return (

        <>
            <Comman title1='TAKE A LOOK'
                title2="Our Galleries"
                title3="Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.e"
                btn="EXPLORE NOW" />

            <div className=" contanier-fluid py-5">
                <div className=" container">
                    <div className="row  gy-3 justify-content-evenly">
                        <div className="col-md-4 galler-card  " data-aos="zoom-in-down" data-aos-duration="2000">
                            <img src={gallery1} className="rounded" width="100%" />
                        </div>
                        <div className="col-md-4 galler-card " data-aos="zoom-in-up" data-aos-duration="2000">
                            <img src={gallery2} className="rounded" width="100%" />
                        </div>
                        <div className="col-md-4 galler-card " data-aos="zoom-in-down" data-aos-duration="2000">
                                <img src={gallery3} className="rounded" width="100%"/>
                        </div>
                    </div>
                    <div className="row  justify-content-evenly gy-3 mt-4">
                        <div className="col-md-4 galler-card " data-aos="zoom-in-up" data-aos-duration="2000">
                            <img src={gallery4} className="rounded" width="100%" />
                        </div>
                        <div className="col-md-4 galler-card " data-aos="fade-up" data-aos-duration="2000">
                            <img src={gallery5} className="rounded" width="100%" />
                        </div>
                        <div className="col-md-4 galler-card " data-aos="fade-down" data-aos-duration="2000">
                                <img src={gallery6} className="rounded" width="100%"/>
                        </div>
                    </div>
                    <div className="row  justify-content-evenly gy-3 mt-4">
                        <div className="col-md-4 galler-card " data-aos="zoom-in-left" data-aos-duration="2000">
                            <img src={gallery7} className="rounded" width="100%" />
                        </div>
                        <div className="col-md-4 galler-card " data-aos="zoom-in-right" data-aos-duration="2000">
                            <img src={gallery8} className="rounded" width="100%" />
                        </div>
                        <div className="col-md-4 galler-card " data-aos="zoom-in-left" data-aos-duration="2000">
                                <img src={gallery9} className="rounded" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Gallery;