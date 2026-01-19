import SizeImg from '../../assets/images/size-img.png'
import TemplateImg from '../../assets/images/template-img.png'

import "./request.css"

function Request(){
    return(
        <section className='request-section'>
            <div className="container request">
                <div className="request-card">
                    <div className="request-card-content">
                        <img className="request-card-img" src={SizeImg} alt="Size img" width={210} height={210}/>
                        <h3 className="request-card-title">Couldn't find a size you need?</h3>
                        <p className="request-card-text">We’ll work directly with you to create a fully branded packaging system.</p>
                        <button className="request-card-btn">Request a quote</button>
                    </div>   
                    <div className='request-card-divider'></div>
                    <div className="request-card-content">
                        <img className="request-card-img" src={TemplateImg} alt="Template img" width={210} height={210}/>
                        <h3 className="request-card-title">Need a free dieline template?</h3>
                        <p className="request-card-text text">Let us know what size you need and we'll email an Adobe Illustrator dieline to you within 3-4 business days.</p>
                        <button className="request-card-btn">Request dieline</button>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default Request;