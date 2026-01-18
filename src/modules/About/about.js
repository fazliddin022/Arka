import OrderImg from "../../assets/images/order-img.png"
import ProofImg from "../../assets/images/proof-img.png"
import PrintImg from "../../assets/images/print-img.png"

import "./about.css"

function About(){
    return(
        <section className="customer-section">
            <div className="container customer">
                <h2 className="customer-title">Fast and easy custom boxes your customers will love</h2>
                <div className="customer-cards">
                    <div className="customer-card">
                        <img className="customer-card-img" src={OrderImg} alt="Order img" width={300} height={300}/>
                        <div className="customer-card-content">
                            <h3 className="customer-card-title">You Order</h3>
                            <p className="customer-card-text">Design and order boxes in a few clicks.</p>
                        </div>
                    </div>
                    <div className="customer-card">
                        <img className="customer-card-img" src={ProofImg} alt="Order img" width={300} height={300}/>
                        <div className="customer-card-content text">
                            <h3 className="customer-card-title">We Proof</h3>
                            <p className="customer-card-text">Approve your designs before production.</p>
                        </div>
                    </div>
                    <div className="customer-card">
                        <img className="customer-card-img" src={PrintImg} alt="Order img" width={300} height={300}/>
                        <div className="customer-card-content">
                            <h3 className="customer-card-title">We Print & Ship</h3>
                            <p className="customer-card-text">Design and order boxes in a few clicks.</p>
                        </div>
                    </div>
                </div>
                <button className="customer-btn">Start your design</button>
            </div>
        </section>
    )
}

export default About