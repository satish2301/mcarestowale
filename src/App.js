
import { Route, Routes} from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Menu from './Menu';
import Home from './Home';
import Events from './Events';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Onlinebook from './Onlinebook';
function App() {

  return (
    <>    
    <div className='main-part container-fluid'>
          <Navbar/>
    </div>  
     <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/event' element={<Events />} />
          <Route exact path='/onlinebook' element={<Onlinebook />} />
      </Routes>
    </>
  );
}

export default App;
