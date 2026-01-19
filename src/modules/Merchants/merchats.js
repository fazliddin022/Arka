import GoogleImg from "../../assets/images/google-img.svg"
import ShopifyImg from "../../assets/images/shopify-img.svg"
import FeedbackImg from "../../assets/images/feedback-img.jpg"
import JesseImg from "../../assets/images/jesse-img.jpg"
import FeedbackImg2 from "../../assets/images/feedback2-img.jpg"
import LeslieImg from "../../assets/images/leslie-img.jpg"
import FeedbackImg3 from "../../assets/images/feedback3-img.jpg"
import AnthonyImg from "../../assets/images/anthony-img.jpg"

import "./merchants.css"

function Merchants(){
    return(
        <section className="merchants-section">
            <h2 className="merchants-title">Merchants love Arka</h2>
            <div className="container merchant">
                <div className="merchants-wrapper">
                    <div className="merchant-rate">
                        <img src={GoogleImg} alt="Google img" width={208} height={114}/>
                        <div className='merchant-divider'></div>
                        <img src={ShopifyImg} alt="Shopify img" width={246} height={114}/>
                    </div>
                    <div className="merchant-feedback">
                        <img src={FeedbackImg} alt="Feedback img" width={588} height={294}/>
                        <div className="merchant-feedback-content">
                            <p className="merchant-feedback-text">“Arka's team is super fast, knowledgeable, and easy to work with - highly recommended!”</p>
                            <div className="merchant-feedback-footer">
                                <img className="merchant-feedback-avatar" src={JesseImg} alt="Jesse img" width={60} height={60}/>
                                <div className="merchant-feedback-author">
                                    <h3 className="merchant-feedback-name">Jesse</h3>
                                    <p className="merchant-feedback-role">Subscription Catalyst</p>
                                </div>
                                <button className="merchant-feedback-btn">Their story</button>
                            </div>
                        </div>
                    </div>
                    <div className="merchant-feedback">
                        <div className="merchant-feedback-content content">
                            <p className="merchant-feedback-text">"I really like Arka because it's a really nice box, I've gotten a lot of compliments on&nbsp;it."</p>
                            <div className="merchant-feedback-footer">
                                <img className="merchant-feedback-avatar" src={LeslieImg} alt="Leslie img" width={60} height={60}/>
                                <div className="merchant-feedback-author">
                                    <h3 className="merchant-feedback-name">Leslie</h3>
                                    <p className="merchant-feedback-role">Burgundy Fox</p>
                                </div>
                                <button className="merchant-feedback-btn">Their story</button>
                            </div>
                        </div>
                        <img src={FeedbackImg2} alt="Feedback img" width={588} height={294}/>
                    </div>
                    <div className="merchant-feedback">
                        <img src={FeedbackImg3} alt="Feedback img" width={588} height={294}/>
                        <div className="merchant-feedback-content">
                            <p className="merchant-feedback-text">“I love how easily it was to customize the box, and you guys were more affordable.”</p>
                            <div className="merchant-feedback-footer">
                                <img className="merchant-feedback-avatar" src={AnthonyImg} alt="Anthony img" width={60} height={60}/>
                                <div className="merchant-feedback-author">
                                    <h3 className="merchant-feedback-name">Anthony</h3>
                                    <p className="merchant-feedback-role">Lipstick Junkie</p>
                                </div>
                                <button className="merchant-feedback-btn">Their story</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Merchants