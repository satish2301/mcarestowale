import React from "react";
import dinner1 from './Image/dinner1.jpg';
import dinner2 from './Image/dinner2.jpg';
import dinner3 from './Image/dinner3.jpg';
import dinner4 from './Image/dinner4.jpg';

import Foodcommoncard from "./Foodcommoncard";

const Dinner=()=>{
    return(
        <>
        <div id="dinner" style={{display:"none"}}>
        
        <div className="row">
                    <div className="col-md-6">
                        <h1 className="tag-name">Dinner</h1>
                    </div>
                    <div className="col-md-6 text-end">
                        <h1 className="number-count">3/4</h1>
                    </div>
          </div>
            <Foodcommoncard imgsrc1={dinner1} imgsrc2={dinner2}  imgsrc3={dinner3} imgsrc4={dinner4}
             name1="Panner copta" name2="Kaddi" name3="Paneer" name4="Aluu SAbji"
              price1="₹190/-" price2="240/-" price3="₹460/-" price4="₹340/-" />
            </div>
        </>
    );
}
export default Dinner;