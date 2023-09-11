import Navbar from "../components/Navbar";
import img1 from '../imgs/simply1.jpg';
import img2 from '../imgs/simply2.jpg';
import img3 from '../imgs/simply3.jpg';
import img4 from '../imgs/simply4.jpg';
import img5 from '../imgs/simply5.jpg';
import img6 from'../imgs/simply6.jpg';
import img7 from'../imgs/simply72.JPEG';
import img8 from'../imgs/simply8.jpg';
import img9 from '../imgs/simply92.JPEG';


import './Home.css'
function Home() {
  return (
   <div>
        <Navbar/>
        <div className="sectionWrapper">
            <div className="sectionWrapper2">
            <div className="sectionHeader">
                <h2>Some dream of cake, others bake it happen. And that's what I'm here to do!</h2>
            </div>
            <div className="sectionText">
            Hi sweet cakes! Welcome! My name is Carrigan, A.K.A the "C" behind Simply C! Aside from my full-time job and duties as a cat mom of two, I love to bake! Prior to this site, I had conducted all my business through Facebook, which had it's pros and cons. With this new website platform, I'm hoping to make processes easier for you, the customer! With that being said, welcome to Simply C Sweets 2.0! I'm so happy you're here.


            </div>
            </div>

        </div>


        <div className="section3">
           
        <div className="galleryWrapper">
            <div className="galleryRow">
                <img src={img1} classname="imgs" alt="img1"></img>
                <img src={img2} classname="imgs" alt="img2"></img>
                <img src={img3} classname="imgs" alt="img3"></img>
            </div>
            <div className="galleryRow2">
                <img src={img4} classname="imgs" alt="img4"></img>
                <img src={img5} classname="imgs" alt="img5"></img>
                <img src={img6} classname="imgs" alt="img6"></img>
            </div>
            <div className="galleryRow3">
                <img src={img7} classname="imgs" alt="img4"></img>
                <img src={img8} classname="imgs" alt="img5"></img>
                <img src={img9} classname="imgs" alt="img6"></img>
            </div>
        </div>
        </div>
   </div>
  );
}

export default Home;
