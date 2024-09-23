import flipkart from "../assests/flipkart.png"
import amazon from "../assests/amazon.png"
import Nike from "../assests/NIke.avif"
import "../page.css"

const HeroSection = () => {
    return (
        <main className="hero">
             <div className="hero-content">
                <h1>YOUR FEET DESERVE BETTER</h1>
                <p>This is a Prototype page that has Nike Products</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="Shopping">
                    <p>Also Avaiable on</p>
                
     
                <div className="brand-icons">
                    <img src={flipkart} alt="flipkart-logo" />
                    <img src={amazon} alt="amazon-logo" />
                </div>
                </div>
            </div>
            
            <div className="hero-image">
                <img src={Nike} alt="Nike-Shoe" />
            </div>
        
        </main>    
    )
}

export default HeroSection;