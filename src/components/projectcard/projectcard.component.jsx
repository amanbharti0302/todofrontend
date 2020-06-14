import React,{Component} from 'react';

import './projectcard.styles.scss';
import { Link } from 'react-router-dom';


class Projectcard extends Component{

    constructor(){
        super();
        this.state={
        }
    }



    render(){

        return(
            <div className="project-card">
                <h4 className="card card-name">name</h4>
                <p className="card card-description">description</p>
                <div className="card card-date">created At </div>
                <Link className="card-link" to="/dashboard/:1234">Enter project &rArr;</Link>
            </div>
        )
    }
}

export default Projectcard;