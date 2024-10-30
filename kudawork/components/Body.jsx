import './Body.css'
import roll from '../src/assets/rollimg.jpg'
import app from '../src/assets/appstore.png'
import play from '../src/assets/playstore.png'
import cbn from '../src/assets/cbn.png'
import ndic from '../src/assets/ndic.png'

const Body = () => {
    return(
        <div className='body'>
            <div className='tag'>
                <h1>The money app for <br />Africans.</h1>
                <p>Make free transfers, enjoy cashless payment <br /> options and earn interest on your savings with <br /> Kuda.</p>
                
                <div className='navs'>
                    <img src={app} className='first'/>
                    <img src={play} className='second'/>
                    
                </div>

                <div className='logs'>
                    <p>Fully Licensed by the CBN</p>
                    <img src={cbn} className='third'/>
                    <p>Deposits Insured by</p>
                    <img src={ndic} className='fourth'/>
                </div>
                
            </div>

            <div className='roll'>
                <img src={roll}/>
            </div>
            
        </div>

    )
}

export default Body