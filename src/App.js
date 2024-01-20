
// import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Projects from './pages/Projects/projects';
import Contact from './pages/Contact/contact';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

