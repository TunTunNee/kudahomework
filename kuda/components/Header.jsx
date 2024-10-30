import kudaimage from "../src/assets/kudaimgreal.png"
import dropdown from '../src/assets/dropdown.png'
import niglogo from '../src/assets/nigdesign.png'
import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img src= {kudaimage} alt="logo"/>
            </div>
            
            <div className="links">
                <a href="">Personal &nbsp;<img src= {dropdown}/></a>
                <a href="">Business &nbsp;<img src= {dropdown}/></a>
                <a href="">Company &nbsp;<img src= {dropdown}/></a>
                <a href="">Help &nbsp;<img src= {dropdown}/></a>
            </div>
            
            <div className="login">
                <a href="">Sign In</a>
                <button>Join Kuda</button>
                <img src={niglogo} alt="nig" />
            </div>
            

        </div>
    )
}

export default Header