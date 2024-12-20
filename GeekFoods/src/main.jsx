import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

