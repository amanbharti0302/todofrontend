import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

// import Logo from '../../assets/logo-nav.svg';

class Navbar extends Component{
    constructor(){
        super();

        this.state = {
          isBoxVisible:false
        };
      }

      toggleBox = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
      };

    render(){
      const { isBoxVisible } = this.state;

    return(
    <div className="section-navbar">
        <title>covidcare</title>
        
        <div className="navbar">
           <div className="nav-con" >
           <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
            <label htmlFor="navi-toggle" className="navigation__button" onClick={this.toggleBox}>
                    <span className="navigation__icon">&nbsp;</span>
            </label>

            {/* <div className="navbar-logo">
                <Link to="/"><img src={Logo} alt="LOGO" className="navbar-logo-img"></img></Link>
            </div> */}
            </div>

            <div className={`navbar-links ${isBoxVisible ? "visible" : "hidden"}`}>
                    <Link href="/" className="navbar-link navbar-link__1 ">Events</Link>
                    <Link href="/" className="navbar-link navbar-link__2 ">Team</Link>
                    <Link href="/" className="navbar-link navbar-link__3 ">Gallery</Link>
                    <Link to="/signup" className="navbar-link navbar-link__4 btn btn-purple">Create Account for free</Link>
            </div>
        </div>
        
    </div>
    )
  }
}

export default Navbar;