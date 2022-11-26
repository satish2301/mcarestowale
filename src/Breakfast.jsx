import React from "react";
import Fridpic from './Image/friedpic.jpg';
import Foodcommoncard from "./Foodcommoncard";
import Chickenpic from './Image/Chickenpic.jpg';
import Shrimppic from './Image/shrimppic.jpg';
import Italianpic from './Image/italianpic.jpg';
const Breakfast = () => {
    return (
        <>
            <div id="break">
                <div className="row">
                    <div className="col-sm-6  ">
                        <h1 className="tag-name" data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">Breakfast</h1>
                    </div>
                    <div className="col-sm-6 text-end">
                        <h1 className="number-count" data-aos="fade-down"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">1/4</h1>
                    </div>
                </div>

                <Foodcommoncard imgsrc1={Italianpic} imgsrc2={Chickenpic} imgsrc3={Shrimppic} imgsrc4={Fridpic}
                    name1="Italian Sauce Mushroom" name2="Salted Fried Chicken" name3="fried potalo w/ Garlic" name4="Shrimp and olive"
                    price1="₹250/-" price2="₹350/-" price3="₹230/-" price4="₹340/-"
                />
            </div>
        </>
    );
}
export default Breakfast;