import React from "react";
import Foodcommoncard from "./Foodcommoncard";
import Juice1 from './Image/juice1.jpg';
import Juice2 from './Image/juice2.jpg';
import Juice3 from './Image/juice3.jpg';
import Juice4 from './Image/juice4.jpg';
const Lunch=()=>{
    return(
        <>
        <div id="lunch" style={{display:"none"}}>
        <div className="row">
                    <div className="col-md-6">
                        <h1 className="tag-name">Lunch</h1>
                    </div>
                    <div className="col-md-6 text-end">
                        <h1 className="number-count">2/4</h1>
                    </div>
          </div>
            <Foodcommoncard imgsrc1={Juice1} imgsrc2={Juice2} imgsrc3={Juice3} imgsrc4={Juice4}
             name1="Italian Sauce Maushroom" name2="Salted Fried Chicken" name3="Fried Rice" name4="Shrim"
              price1="₹170/-" price2="₹430/-"  price3="₹230/-" price4="₹430/-" />
            </div>
        </>
    );
}
export default Lunch;