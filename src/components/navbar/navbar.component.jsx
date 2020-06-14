import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

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
        
        <div className="navbar">
           <div className="nav-con" >
           <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
            <label htmlFor="navi-toggle" className="navigation__button" onClick={this.toggleBox}>
                    <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navbar-logo">
                <Link to="/" className="navlinknew"><img src="https://img.icons8.com/clouds/100/000000/todo-list.png" alt="LOGO" className="navbar-logo-img"></img><h4>home</h4></Link>
          
            </div>
            </div>

            <div className={`navbar-links ${isBoxVisible ? "visible" : "hidden"}`}>
                    {/* <Link to="/" className="navbar-link navbar-link__1 ">my projects</Link>
                    <Link to="/" className="navbar-link navbar-link__2 ">Team</Link> */}
                    <Link to="/projects/:1234" className="navbar-link navbar-link__3 ">MY PROJECTS</Link>
                    <Link to="/signup" className="navbar-link navbar-link__4 btn btn-purple">Create Account for free</Link>
            </div>
        </div>
        
    </div>
    )
  }
}

export default Navbar;