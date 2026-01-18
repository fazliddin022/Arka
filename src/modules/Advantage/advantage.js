import EcoFriendly from "../../assets/images/eco-friendly-img.png"
import OutsidePrint from "../../assets/images/outside-print-img.png"
import Proofing from "../../assets/images/proofing-img.png"

import "./advantage.css"

function Advantage(){
    return(
        <section className="advantage-section">
            <div className="container advantage">
                <h3 className="advantage-title">The Arka advantage</h3>
                <div className="advantage-cards">
                    <div className="advantage-card">
                        <img className="advantage-card-img" src={EcoFriendly} alt="Eco-friendly img" width={254} height={254}/>
                        <div className="advantage-card-content">
                            <h3 className="advantage-card-title">Eco-Friendly Material</h3>
                            <p className="advantage-card-text">Order as little as 10, giving you the lowest minimums in the industry at the best prices.</p>
                        </div>
                    </div>
                    <div className="advantage-card">
                        <img className="advantage-card-img" src={OutsidePrint} alt="Outside img" width={254} height={254}/>
                        <div className="advantage-card-content text">
                            <h3 className="advantage-card-title">Full Outside Print</h3>
                            <p className="advantage-card-text">Design what you want - no extra cost! Prices include 100% exterior print, change design whenever!</p>
                        </div>
                    </div>
                    <div className="advantage-card">
                        <img className="advantage-card-img" src={Proofing} alt="Proofing img" width={254} height={254}/>
                        <div className="advantage-card-content">
                            <h3 className="advantage-card-title">Proofing</h3>
                            <p className="advantage-card-text">After you order, our internal designers help make sure your designs are 100% ready for printing!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantage