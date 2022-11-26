import React from "react";
import Comman from "./Common";
import Footer from "./Footer";
import PersonalInfo from "./PersonalInfo";
const About=()=>{
    return(

        <>
              <Comman title1='OUR RESTAURANT'
                title2="About Us"
                title3="Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.e"
                btn="EXPLORE NOW" />
                <PersonalInfo/>
            <Footer/>
        </>
    );
}
export default About;