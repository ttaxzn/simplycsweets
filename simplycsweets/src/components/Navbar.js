import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
   <div>
       <div className="navWrapper">
           <div className="header">
           <h1><Link to="/">simply c sweets</Link></h1>
           </div>
           <div className="navBar">
               <div class="listWrapper">
                   <div><a href="https://www.facebook.com/carrigan.hauck" className="hoverMe" target="_blank" rel="noopener noreferrer">about me</a></div>
                   <div><a href="https://forms.gle/MABRd5fGsmk8cAxN8" className="hoverMe" target="_blank" rel="noopener noreferrer">place an order</a></div>
                   <div><Link to="/allergies" className="hoverMe">got allergies?</Link></div>
                   <div><a href="mailto:simplycsweets@gmail.com" className="hoverMe" target="_blank" rel="noopener noreferrer">let's chat!</a></div>
               </div>
           </div>
       </div>
   </div>
  );
}

export default Navbar;
