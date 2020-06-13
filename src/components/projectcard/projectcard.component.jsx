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
                <h4>name</h4>
                <p>description</p>
                <div>created At </div>
                <Link to="/dashboard/:1234">Enter project</Link>
            </div>
        )
    }
}

export default Projectcard;