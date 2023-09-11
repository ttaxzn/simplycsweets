import Navbar from "../components/Navbar"
import './Allergies.css'
function Allergies(){
    return(
        <>
        <Navbar/>

        <div className="section1">
            <h2>
                Got allergies? 
            </h2>
            <div className="sectionText1 gaps2">At Simply C Sweets, we understand the importance of catering to our customers' dietary needs and safety concerns. We take allergies seriously and want you to be informed about the potential allergens in our delicious baked goods. Please take a moment to review the common allergens and which of our products may contain these ingredients:

</div>

<div className="allergies">
    
    <h2>Nut Allergies</h2>
<ul>
    <li>Found in: Almond cookies, peanut butter brownies, and some granola bars.
</li>
</ul>

<h2>Dairy Allergies</h2>
<ul>
    <li>Found in: Most cakes, cream-filled pastries, and buttery desserts.
</li>
</ul>

<h2>Egg Allergies</h2>
<ul>
    <li>Found in: Many muffins, cookies, and cakes.
</li>
</ul>

<h2>Soy Allergies</h2>
<ul>
    <li>Found in: Some chocolate chips, soy-based fillings, and certain glazes.

</li>
</ul>

<div className="gaps">
At Simply C Sweets, your safety and satisfaction are our top priorities. While we take precautions to prevent cross-contamination, please be aware that our bakery handles a variety of ingredients, so we cannot guarantee a completely allergen-free environment. If you have severe allergies, we recommend reaching out to us directly to discuss your specific concerns or exploring our special allergen-sensitive options. Your well-being matters to us, and we are here to make your bakery experience enjoyable and worry-free.
</div>
</div>
        </div>
        </>
    )
}

export default Allergies