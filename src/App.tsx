import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Doors from './components/Gallery/Doors';
import DressingRoom from './components/Gallery/DressingRoom';
import InteriorDesign from './components/Gallery/InteriorDesign';
import Kitchens from './components/Gallery/Kitchens';

function App() {

  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/gallery' element={<GalleryPage />} />
                <Route path='/doors' element={<Doors />} />
                <Route path='/dressing-room' element={<DressingRoom />} />
                <Route path='/interior-design' element={<InteriorDesign />} />
                <Route path='/kitchens' element={<Kitchens />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
};

export default App;
