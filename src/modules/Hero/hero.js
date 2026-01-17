import HeroImg from "../../assets/images/hero-img.png"

import "./hero.css"

function Hero(){
    return(
        <section className="hero-section">
            <div className="container hero">
                <div className="hero-title-wrapper">
                    <h1 className="hero-title">Fast and easy custom boxes your customers will love</h1>
                    <p className="hero-text">Fastest turnaround. Best prices instantly. Dieline design help available.</p>
                    <button className="hero-btn">Start your design</button>
                </div>
            <img className="hero-img" src={HeroImg} alt="Hero Img" width={504} height={504}/>
            </div>
        </section>
    )
}

export default Hero