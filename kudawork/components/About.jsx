import one from '../src/assets/one.png'
import two from '../src/assets/two.png'
import three from '../src/assets/three.png'
import four from '../src/assets/four.png'
import five from '../src/assets/five.png'
import six from '../src/assets/six.jpg'
import greater from '../src/assets/greater.png'
import './About.css'

const About = () => {
    return(
        <div className='about'>
            <div className='aboutOne'>
                <div>
                    <h2>Your phone + <br /> our app + <br /> a debit card = <br /> a simpler life.</h2>
                    <p>We designed a money app for your lifestyle, <br /> and you can get a debit card to go with it. <br /> That's all you need to make the right money <br /> moves.</p>
                    <a href="">Open An Account in Minutes &nbsp;<img src={greater} alt="" /></a>
                </div>
                
                <div>
                    <img src={one} alt="" />
                </div>
               
            </div>

            <div className='aboutTwo'>
                <div>
                    <img src={two} alt="" />
                </div>
                <div className='sub'>
                    <h2>It’s your money, we just <br /> help you manage it.</h2>
                    <p>Save it, spend it, send it. It’s up to you. <br /> Whatever you choose to do with your money, <br /> we’ll make sure it’s done better and free of <br /> charge. We take responsibility for that.</p>
                </div>

            </div>

            <div className='aboutThree'>
                <div className='sub'>
                    <h2>Save money as you <br /> spend it, seriously.</h2>
                    <p>You can’t avoid spending. That’s how you pay <br /> for your needs. But we can help you put money <br /> away every time you pay for something. Just <br /> set a percentage to save and watch your <br /> money grow.</p>
                    <a href="">See all our Savings &nbsp;<img src={greater} alt="" /></a>
                </div>
                
                <div>
                    <img src={three} alt="" />
                </div>
            </div>

            <div className='aboutFour'>
                <div>
                    <img src={four} alt="" />
                </div>
                <div className='sub'>
                    <h2>Turn off access, turn on <br /> safety.</h2>
                    <p>Life happens. Milk spills. Debit cards go <br /> missing. If that ever happens, you can block <br /> your missing card on the app so no one can <br /> use it. We’d like to see them try.</p>
                    <a href="">Learn more about Cards &nbsp; <img src={greater} alt="" /></a>
                </div>
            </div>

            <div className='aboutFive'>
                <div className='sub'>
                    <h2>We’re always happy to <br /> help you.</h2>
                    <p>You can chat with us on the app, slide into our <br /> DMs, tweet, leave an Instagram comment, <br /> send an email or call. However you choose to <br /> reach out, there’ll always be a friendly person <br /> there to make your life easy.</p>
                    <a href="">Get Help &nbsp;<img src={greater} alt="" /></a>
                </div>
                
                <div>
                    <img src={five} alt="" />
                </div>
            </div>
            
            <div className='aboutSix'>
                <div>
                    <img src={six} alt="" />
                </div>
                <div className='sub'>
                    <h2>Fees as clear as glass.</h2>
                    <p>We’re serious about free banking, and we will <br /> never, ever charge you for anything without <br /> your consent.</p>
                    <a href="">See all our fees &nbsp; <img src={greater} alt="" /></a>
                </div>
            </div>

            <h2>Don’t just take our word for it</h2>
        </div>
    )
}

export default About