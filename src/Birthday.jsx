import React from "react";

import birthday1 from './Image/birthday6.svg';
import birthday2 from './Image/birthday2.svg';
import birthday3 from './Image/birthday3.svg';
import birthday4 from './Image/birthday5.svg';

import Tablecommon from "./Tablecommon";
import Modal from "./Modal";
const Birthday=()=>{
    return(
        <>
        <Modal/>
          <div id="birthday">
          <div className="row">
                    <div className="col-sm-6  ">
                        <h1 className="tag-name"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Birthday Party</h1>
                    </div>
                    <div className="col-sm-6 text-end">
                        <h1 className="number-count"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">1/4</h1>
                    </div>
                    
          </div>
            
            <Tablecommon imgsrc1={birthday1}  imgsrc2={birthday2} imgsrc3={birthday3}  imgsrc4={birthday4} 
            name1="Normal party" name2="A Night in the Clouds" name3="Party with Decoration" name4="Party with Events"
            price1="₹800/-" price2="₹1500/-" price3="₹2000/-" price4="₹2500/-"
            button1="BOOK A TABLE 1" button2="BOOK A TABLE 2" button3="BOOK A TABLE 3" button4="BOOK A TABLE 4"
             />
            </div>
        </>
    );
}
export default Birthday;