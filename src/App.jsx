import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CommitteePage from './components/Committee';
import Speakers from './components/Speakers';
import Venue from './components/Venue';
import Footer from './components/Footer';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarfancy from './components/NavbarMod';
import SubmissionPageNav from './components/SubmissionPageNav';
import ScrollToTop from './ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbarfancy />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<CommitteePage/>}/>
        <Route path="/speakers" element={<Speakers/>}/>
        <Route path="/venue" element={<Venue/>}/>
        <Route path="/submission" element={<SubmissionPageNav/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
