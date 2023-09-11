import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import Allergies from './pages/Allergies'
function App() {
  return (
   <>
     <Router>
       <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/allergies" element={<Allergies/>}/>
     </Routes>
     </Router>
   </>
  );
}

export default App;
