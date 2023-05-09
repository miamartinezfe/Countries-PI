import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./views/Landing/Landing.jsx";
import Home from "./views/Home/Home.jsx";
import axios from "axios";
import Detail from "./components/Detail/Detail";
axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  return (
    <div className='App'> 
       <Routes>
       <Route path='/' element={<Landing/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path="/detail/:id" element={<Detail/>}></Route>
       </Routes>
    </div>
 );
}

export default App;
