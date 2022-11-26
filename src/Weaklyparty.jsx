import React from "react";
import Tablecommon from "./Tablecommon";
import weakly1 from './Image/weakly1.svg';
import weakly2 from './Image/weakly2.svg';
import weakly3 from './Image/weakly3.svg';
import weakly4 from './Image/weakly4.svg';


const Weaklyparty=()=>{
    return(
        <>
          <div id="weakly" style={{display:"none"}}>
          <div className="row">
                    <div className="col-sm-6  ">
                        <h1 className="tag-name">Weakly Party</h1>
                    </div>
                    <div className="col-sm-6 text-end">
                        <h1 className="number-count">1/4</h1>
                    </div>
          </div>
            
          <Tablecommon imgsrc1={weakly1}  imgsrc2={weakly2} imgsrc3={weakly3}  imgsrc4={weakly4} 
          button1="BOOK A TABLE 1" button2="BOOK A TABLE 2" button3="BOOK A TABLE 3" button4="BOOK A TABLE 4"
          name1="50% off weakly customer" name2="20% off weakly customer with DJ" name3="Party with Music" name4="Special party depand time"
          price1="₹999/-" price2="₹1399/-" price3="₹1699/-" price4="₹1999/-"
             />
            </div>
        </>
    );
}
export default Weaklyparty;