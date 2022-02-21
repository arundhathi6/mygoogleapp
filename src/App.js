import logo from './logo.svg';
import './App.css';
import {Home} from "./components/Home";
import {Info} from "./components/info";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
      <Route path="/search" element={<Home/>}></Route>
      <Route path="/search/:searchid" element={<Info/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
