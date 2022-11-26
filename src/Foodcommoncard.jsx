import React from "react";

const Foodcommoncard = (props) => {
    return (
        <>
            <div className="col-12 offset-3 offset-sm-1 ">
                <div className="row justify-content-evenly">
                    <div className="col-md-5 gy-5" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card" >
                            <img src={props.imgsrc1} alt="card-img" />

                        </div>
                        <div>
                            <p className="card-name">{props.name1}</p>
                            <p className="card-price">{props.price1}</p>
                        </div>
                    </div>
                    <div className="col-md-5 gy-5" data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card">
                            <img src={props.imgsrc2} alt="card-img" />

                        </div>
                        <div>
                            <p className="card-name">{props.name2}</p>
                            <p className="card-price">{props.price2}</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-evenly">
                    <div className="col-md-5 col-sm-12 gy-3" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card">
                            <img src={props.imgsrc3} alt="card-img" />
                        </div>
                        <div className="">
                            <p className="card-name">{props.name3}</p>
                            <p className="card-price">{props.price3}</p>
                        </div>
                    </div>
                    <div className="col-md-5  col-sm-12 gy-3" data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card">
                            <img src={props.imgsrc4} alt="card-img" />

                        </div>
                        <div>
                            <p className="card-name">{props.name4}</p>
                            <p className="card-price" >{props.price4}</p>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}
export default Foodcommoncard;