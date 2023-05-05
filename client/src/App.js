import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing.jsx";

function App() {
  function onSearch(id) {
    return true;
 }
  return (
    <div className='App'> 
       <Routes>
       <Route path='/' element={<Landing/>}></Route>
       </Routes>
    </div>
 );
}

export default App;
