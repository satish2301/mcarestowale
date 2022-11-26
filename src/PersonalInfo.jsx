import React from 'react'
import satishpng from './Image/satishpng1.jpeg';
import { FaFacebookF, FaLinkedinIn, FaGripLinesVertical } from 'react-icons/fa';
import { RiWhatsappFill } from "react-icons/ri";
const PersonalInfo = () => {
    return (
        <>
            <div className='container-fluid  personal-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5' data-aos="fade-zoom-in"
                            data-aos-duration="2000"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <img src={satishpng} alt='myimage' className='personal-img' />
                        </div>
                        <div className='col-md-6 pt-5'>
                            <p className='muted' data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">Resto info😀</p>
                            <h1 data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">MCA RESTO WALE</h1>
                            <p data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">Places we prefer vary depending on our taste, culture, mood, previous experience and our first impression of the place.

                                Today, I will talk about my favorite restaurant that I visited one day and left an impression of calm and quietness as well as the quality of the food and it’s tasty taste.

                                Italian cuisine is one of the most famous kitchens around the world and is one of the most luxurious and characteristic cuisines in the world. It is the origin of pasta and pizza that is unparalleled anywhere else.
                            </p>
                            <p data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">🌟🌟🌟🌟   4 Reviews <span style={{ fontSize: "25px" }}><FaGripLinesVertical /></span><FaFacebookF /><span><RiWhatsappFill /></span> <span><FaLinkedinIn /></span> <span></span></p>
                            <button className='btn btn-primary' data-aos="fade-up"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">READ MORE</button>
                            <br />
                            <br />
                            <p className='text-dark' data-aos="fade-down"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">Eat a lot today (and again tomorrow).</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo