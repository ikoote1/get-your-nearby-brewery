import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/category';
import Nav from './components/nav';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
