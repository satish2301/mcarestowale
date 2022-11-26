import React from "react";
import Tablecommon from "./Tablecommon";
import couple1 from './Image/couple1.svg';
import couple2 from './Image/couple2.svg';
import couple3 from './Image/couple3.svg';
import couple4 from './Image/couple4.svg';
// import Modal from "./Modal";


const Coupleparty=()=>{
    return(
        <>
          <div id="couple" style={{display:"none"}}>
          <div className="row">
                    <div className="col-sm-6  ">
                        <h1 className="tag-name">Couple Party</h1>
                    </div>
                    <div className="col-sm-6 text-end">
                        <h1 className="number-count">1/4</h1>
                    </div>
          </div>
            
          <Tablecommon imgsrc1={couple1}  imgsrc2={couple2} imgsrc3={couple3}  imgsrc4={couple4} 
               name1="Anniversary Party" name2="Engagenent Party" name3="Party with samping" name4="Party with Music"
               price1="₹1000/-" price2="₹1500/-" price3="₹2000" price4="₹2500/-"
               button1="BOOK A TABLE 1" button2="BOOK A TABLE 2" button3="BOOK A TABLE 3" button4="BOOK A TABLE 4"
             />
            </div>
        </>
    );
}
export default Coupleparty;