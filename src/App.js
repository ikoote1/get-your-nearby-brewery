import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<category />} />
      </Routes>
      <h1>ikoote</h1>
    </div>
  );
}

export default App;
