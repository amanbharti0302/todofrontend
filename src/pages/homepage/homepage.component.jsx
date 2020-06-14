import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss'

import welcomeleft from '../../assets/welcome-left.png';
import welcomeright from '../../assets/welcome-right.png';

class HomePage extends Component{

    render(){
        return(
            <div className="home">
                <title>TO DO |HOME</title>
                <div className="section-top">
                <img src={welcomeleft} alt="WELCOME LEFT" className="top-img"/>
                <div className="content-div">
                   <div className="content">WELCOME to do list</div>
                   <div className="content">Developed by aman bharti</div>
                   <div className="content">Developed with react nodejs</div>
                </div>
                <img src={welcomeright} alt="WELCOME LEFT" className="top-img"/>
                </div>
            </div>
        )
    }
}

export default HomePage;