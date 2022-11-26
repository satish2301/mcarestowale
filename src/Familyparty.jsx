import React from "react";
import Tablecommon from "./Tablecommon";
// import birthday1 from './Image/nightdate.gif';
import family1 from './Image/family1.svg';
import family2 from './Image/family2.svg';
import family3 from './Image/family3.svg';
import family4 from './Image/family4.svg';
// import Modal from "./Modal";



const Familyparty=()=>{
    return(
        <>
          <div id="family" style={{display:"none"}}>
          <div className="row">
                    <div className="col-sm-6  ">
                        <h1 className="tag-name">Family Party</h1>
                    </div>
                    <div className="col-sm-6 text-end">
                        <h1 className="number-count">1/4</h1>
                    </div>
            
          </div>
            
          <Tablecommon imgsrc1={family1}  imgsrc2={family2} imgsrc3={family3}  imgsrc4={family4} 
          button1="BOOK A TABLE 1" button2="BOOK A TABLE 2" button3="BOOK A TABLE 3" button4="BOOK A TABLE 4"
          name1="Dance Event Free" name2="Sit Down and Eat" name3="Open Sky Dinner" name4="Samping Party"
          price1="₹1299/-" price2="₹1499/-" price3="₹1999/-" price4="₹3499/-"
             />
            </div>
        </>
    );
}
export default Familyparty;