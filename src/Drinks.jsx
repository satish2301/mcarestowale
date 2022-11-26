import React from "react";
import Foodcommoncard from "./Foodcommoncard";
import satish1 from './Image/satish1.jpg';
import Juice2 from './Image/juice2.jpg';
import Juice3 from './Image/juice3.jpg';
import Juice4 from './Image/juice4.jpg';

const Drinks=()=>{
    return(
        <>
        <div id="drink" style={{display:"none"}}>
        <div className="row">
                    <div className="col-md-6">
                        <h1 className="tag-name">Drinks</h1>
                    </div>
                    <div className="col-md-6 text-end">
                        <h1 className="number-count">4/4</h1>
                    </div>
          </div>
            <Foodcommoncard imgsrc1={satish1} imgsrc2={Juice2} imgsrc3={Juice3} imgsrc4={Juice4} 
            name1="Orange Juice" name2="Lemon Juice with soda" name3="Honey Juice with Pineapple" name4="Beet Juice"
            price1="₹ 150/-" price2="₹ 170/-" price3="₹ 140/-" price4="₹ 170/-"
            />
            </div>
        </>
    );
}
export default Drinks;