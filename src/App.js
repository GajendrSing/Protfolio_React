import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Services from './components/Services';


function App() {
  return (
    <div className="px-5">
     <Container>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/service' element={<Services/>}/>
      </Routes>
    </Router>
   </Container>
    </div>
  );
}

export default App;
