import logo from './logo.svg';
import './App.css';


import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </Router>,

    </>
  );
}

export default App;
