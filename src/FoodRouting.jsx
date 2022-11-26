
import { NavLink } from "react-router-dom";
import Breakfasticon from './Image/breakfasticon.png';
import Dinnericon from './Image/dinnericon.png';
import Drinksicon from './Image/drinksicon.png';
import Lunchicon from './Image/lunchicon.png';
import Breakfast from "./Breakfast";
import Drinks from "./Drinks";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import popular1 from './Image/popular1.webp'
import popular2 from './Image/popular2.webp'
import popular3 from './Image/popular3.webp'
import popular4 from './Image/popular4.webp'


const FoodRouting = (props) => {


  const breakhandle = () => {
    document.getElementById("break").style.display = "block";
    document.getElementById("lunch").style.display = "none";
    document.getElementById("dinner").style.display = "none";
    document.getElementById("drink").style.display = "none";
  }

  const dinnerhandle = () => {
    document.getElementById("dinner").style.display = "block";
    document.getElementById("drink").style.display = "none";
    document.getElementById("lunch").style.display = "none";
    document.getElementById("drink").style.display = "none";
  }
  const drinkhandle = () => {
    document.getElementById("drink").style.display = "block";
    document.getElementById("break").style.display = "none";
    document.getElementById("lunch").style.display = "none";
    document.getElementById("dinner").style.display = "none";
  }
  const lunchhandle = () => {
    document.getElementById("lunch").style.display = "block";
    document.getElementById("break").style.display = "none";
    document.getElementById("dinner").style.display = "none";
    document.getElementById("drink").style.display = "none";
  }
  return (
    <>
      <section className="food-item">
        <div className="row py-5 ">
          <div className=" col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-3">
                <h5 className="food-muted" data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine">SELECT YOUR MEAL</h5>
                <h4 className="food-heading" data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine">Popular <span>Foods</span></h4>
                <div>
                  <div className="foods-name" onClick={breakhandle} data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={Breakfasticon} alt="img" className="breakicon" />
                    <NavLink className="breakfast-name" >BREAKFAST

                    </NavLink>

                  </div>
                  <div className="foods-name" onClick={lunchhandle} data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={Lunchicon} alt="img" className="breakicon" />
                    <NavLink className="breakfast-name">LUNCH
                    </NavLink>
                  </div>
                  <div className="foods-name" onClick={dinnerhandle} data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={Dinnericon} alt="img" className="breakicon" />
                    <NavLink className="breakfast-name">DINNER
                    </NavLink>
                  </div>
                  <div className="foods-name1" onClick={drinkhandle} data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={Drinksicon} alt="img" className="breakicon" />
                    <NavLink className="breakfast-name drinks">DRINKS
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <Breakfast />
                <Dinner />
                <Lunch />
                <Drinks />
              </div>



            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <h6 data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">CHOOSE DESSERTS</h6>
            <h3 data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">Popular Desserts</h3>
          </div>
        </div>
        <div className="row  py-5 justify-content-evenly text-center ">
          <div className="col-md-2 popular-card " data-aos="zoom-out-down" data-aos-duration="2000">
            <div className="d-flex">
              <div className="offset-sm-2 offset-md-0">
                <img src={popular1} />
              </div>
              <div className="mt-4 offset-sm-3 offset-md-0">
                <p>Cherry Muffin</p>
                <h3>₹80/-</h3>
              </div>

            </div>
          </div>
          <div className="col-md-2 popular-card" data-aos="zoom-out-up" data-aos-duration="2000">
            <div className="d-flex">
              <div className="offset-sm-2 offset-md-0">
                <img src={popular2} />
              </div>
              <div className="mt-4 offset-1">
                <p>Rose Muffin</p>
                <h3>₹89/-</h3>
              </div>

            </div>
          </div>
          <div className="col-md-2 popular-card" data-aos="zoom-out-down" data-aos-duration="2000">
            <div className="d-flex">
              <div className="mt-2 offset-sm-2 offset-md-0">
                <img src={popular3} />
              </div>
              <div className="mt-4 offset-sm-3 offset-md-0">
                <p>Sweet Donut</p>
                <h3>₹90/-</h3>
              </div>

            </div>
          </div>
          <div className="col-md-2 popular-card" data-aos="zoom-out-up" data-aos-duration="2000">
            <div className="d-flex">
              <div className="offset-sm-2 offset-md-0">
                <img src={popular4} />
              </div>
              <div className="mt-4 offset-sm-3 offset-md-0">
                <p>Choco Cake</p>
                <h3>₹99/-</h3>
              </div>

            </div>
          </div>

        </div>

      </section>
    </>
  );
}

export default FoodRouting;