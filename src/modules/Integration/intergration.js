import ShopifyImg from "../../assets/images/shopify-img.png"
import AmazonImg from "../../assets/images/amazon-img.png"
import EcoImg from "../../assets/images/eco-img.png"

import "./integration.css"

function Integration(){
    return(
        <section className="integration-section">
            <div className="container">
                <ul className="integration-list">
                    <li className="integration-item">
                        <img src={ShopifyImg} alt="Shopify Img" width={142} height={80}/>
                        <p className="integration-text">Shopify Integrated</p>
                    </li>
                    <li className="integration-item">
                        <img src={AmazonImg} alt="Shopify Img" width={80} height={80}/>
                        <p className="integration-text">Amazon Certified</p>
                    </li>
                    <li className="integration-item">
                        <img src={EcoImg} alt="Shopify Img" width={125} height={80}/>
                        <p className="integration-text last">Eco-Friendly</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Integration 