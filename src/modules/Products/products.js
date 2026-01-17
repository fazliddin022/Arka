import CartonBox from "../../assets/images/carton-box-img.png"
import CustomBox from "../../assets/images/custom-box-img.png"
import CustomPoly from "../../assets/images/custom-poly-img.png"
import CustomTape from "../../assets/images/custom-tape-img.png"
import CustomStickers from "../../assets/images/custom-sticker-img.png"
import CustomTissue from "../../assets/images/custom-tissue-img.png"

import "./products.css"

function Products(){
    return(
        <section className="products-section">
            <div className="container product">
                <div className="product-title-wrapper">
                    <h2 className="product-title">Products you can customize</h2>
                    <button className="product-btn">Browse all products</button>
                </div>
                <div className="products-list">
                    <div className="product-card">
                      <img className="product-card-img" src={CartonBox} alt="Carton-Box" width={398} height={302}/>
                        <div className="product-card-content">
                            <h3 className="product-card-title">Custom Carton Boxes</h3>
                            <div className="product-info">
                                <p className="product-info-text">Create a clean brand presentation with this custom carton box.</p>
                                <span className="product-info-price">Starting at: $10.44/unit</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                      <img className="product-card-img" src={CustomBox} alt="Custom-Box" width={398} height={302}/>
                        <div className="product-card-content">
                            <h3 className="product-card-title">Custom Boxes</h3>
                            <div className="product-info">
                                <p className="product-info-text">A stylish and strong corrugated cardboard box.</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                      <img className="product-card-img" src={CustomPoly} alt="Custom-Poly" width={398} height={302}/>
                        <div className="product-card-content">
                            <h3 className="product-card-title">Custom Poly Mailers</h3>
                            <div className="product-info">
                                <p className="product-info-text">A fully custom high quality self sealing poly mailer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                      <img className="product-card-img" src={CustomTape} alt="Custom-Tape" width={398} height={302}/>
                        <div className="product-card-content">
                            <h3 className="product-card-title">Custom Tape</h3>
                            <div className="product-info">
                                <p className="product-info-text">High quality custom tape to seal your shipping boxes during delivery.</p>
                                <span className="product-info-price">Starting at: $12.16/unit</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                      <img className="product-card-img" src={CustomStickers} alt="Cart-Stickers" width={398} height={302}/>
                        <div className="product-card-content">
                            <h3 className="product-card-title">Custom Stickers</h3>
                            <div className="product-info">
                                <p className="product-info-text">Add personality to your packages with custom stickers.</p>
                                <span className="product-info-price">Starting at: $0.41/unit</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                      <img className="product-card-img" src={CustomTissue} alt="Custom-Tissue" width={398} height={302}/>
                        <div className="product-card-content">
                            <h3 className="product-card-title">Custom Tissue Paper</h3>
                            <div className="product-info">
                                <p className="product-info-text">The perfect addition to branding your package.</p>
                                <span className="product-info-price">Starting at: $6.54/unit</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-shop-wrapper">
                    <a className="product-link" href="/">Need unbranded stock items?</a>
                    <button className="product-shop">Shop stock</button>
                </div>
            </div>
        </section>
    )
}

export default Products