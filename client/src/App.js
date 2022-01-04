import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <h1>This is my portfolio in ReactJS</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
