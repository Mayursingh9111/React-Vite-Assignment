import ReactDOM from 'react-dom/client'
import './index.css'
import Qoute from './Components/Qoute'
import Home from './Components/Home'
import Restaurent from "./Components/Restaurent";
import { BrowserRouter,Routes,Route } from 'react-router-dom' 


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/qoute" element={<Qoute />} />
      <Route path="/restaurent" element={<Restaurent />} />
    </Routes>
  </BrowserRouter>
);

