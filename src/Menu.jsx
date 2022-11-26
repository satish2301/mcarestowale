import React from "react";
import Comman from "./Common";
import FoodRouting from "./FoodRouting";
import Footer from "./Footer";
const Menu = () => {
    return (

        <>
            <Comman title1='GET IN TOUCH'
                title2="Our Main Menu"
                title3="Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                btn="EXPLORE NOW" />
               <FoodRouting/>
               <Footer/>
        </>
    );
}
export default Menu;