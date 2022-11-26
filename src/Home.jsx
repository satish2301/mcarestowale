import React from "react";
import Comman from "./Common";
import Testmonal from './Testmonal';
import FoodRouting from "./FoodRouting";
import Enjoyevent from "./Enjoyevent";
import BookTable from "./BookTable";
import Footer from "./Footer";


const Home = (props) => {
    return (
        <>
            <Comman title1='ENJOY YOUR HEALTHY DELICIOUS MEAL'
                title2="Treat Yourself"
                title3="Another free template by Colorlib.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.e"
                btn="EXPLORE NOW" />
               
                <FoodRouting/>  
                <Testmonal/> 
                <Enjoyevent/>
                <BookTable/>
                <Footer/>
        </>
    );
}
export default Home;