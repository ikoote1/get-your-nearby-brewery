import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/category';
import Nav from './components/nav';
import About from './components/about';
import BreweryAbout from './components/breweryAbout';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/About" element={<About />} />
        <Route path="/breweryAbout/:breweryName" element={<BreweryAbout />} />
      </Routes>
    </div>
  );
}

export default App;
