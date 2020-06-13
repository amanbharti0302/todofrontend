import React,{Component} from 'react';

import './allprojects.styles.scss';
// import { Link } from 'react-router-dom';
import Projectcard from '../../components/projectcard/projectcard.component';


class Allproject extends Component{

    constructor(){
        super();
        this.state={
        }
    }



    render(){

        return(
            <div className="project-page">
                <div className="project-content">
                    <Projectcard/>
                    <Projectcard/>
                </div>
            </div>
        )
    }
}

export default Allproject;