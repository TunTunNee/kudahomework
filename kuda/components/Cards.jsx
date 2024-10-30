import card from '../src/assets/card.png'
import airnav from '../src/assets/airnav.jpg'
import quarter from '../src/assets/quarter.jpg'
import rad from '../src/assets/rad.jpg'
import measure from '../src/assets/measure.jpg'
import './Cards.css'


const Cards = () => {
    return(
        <div className="cards">
            <div>
                <img src={card} alt="" />
                <p className='dot'>Order a Kuda card on the app with <br /> pickup and delivery options.</p>
            </div>

            <br />

            <div>
                <img src={quarter} alt="" />
                <p>Enjoy cashless payment options online <br /> and offline.</p>
            </div>

            <br />

            <div>
                <img src={measure} alt="" />
                <p>Pay your essential bills and buy gift <br /> cards easily.</p>
            </div>

            <br />

            <div className='fifth'>
                <img src={airnav} alt="" />
                <p>Get 25 free transfers to Nigerian banks every month.</p>
            </div>

            <br />

            <div className='sixth'>
                <img src={rad} alt="" />
                <p>Save money automatically any time <br /> you spend.</p>
            </div>

        </div>
    )
}

export default Cards