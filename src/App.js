import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/category';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
