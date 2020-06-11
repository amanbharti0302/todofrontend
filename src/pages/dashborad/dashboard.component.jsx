import React,{Component} from 'react';

import './dashboard.styles.scss';
import { Link } from 'react-router-dom';

class Dashboard extends Component{

    constructor(){
        super();
        this.state={
            contributor:false,
            todo:'',
            doing:'',
            done:''
        }
    }


    showcontribution=()=>{
        this.setState(prevState=>({contributor:!prevState.contributor}))
    }

    render(){

        const {contributor}= this.state;

        return(
            <div className="dashboard">
                <div className="dash-nav">
                    hello aman
                </div>

                <div className="dash-main">
                    <div className="pr-nav">
                        <div className="pr pr-name">Project name</div>
                        <div className="pr pr-description">project description</div>
                        <div className="pr-invite"><Link className="pr pr-invite__link">Invite</Link></div>
                        <div className="pr pr-contr"><Link className="pr pr-contr__link" onClick={this.showcontribution}>Contributors</Link></div>
                    </div>


                    <div className={`contributor-info ${contributor ?"contributor-info-visible":"contributor-info-invisible"}`}>
                            <h1 className="contributor-info-heading">contributors</h1>
                            <h3>AMAN BHARTI</h3>
                            <h3>AMAN BHARTI</h3>
                            <h3>ANSHU THE KING</h3>
                        </div>


                    <div className="project-info">

                        <div className="info info-todo">
                                Things to do
                                <div className="info-box">

                                </div>
                                <div className="info-add">+ Add card</div>
                        </div>
                        <div className="info info-doing">
                                Doing
                                <div className="info-box">

                                </div>
                                <div className="info-add">+ Add card</div>
                        </div>

                        <div className="info info-done">
                                Done
                                <div className="info-box">

                                </div>

                                <div className="info-add">+ Add card</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard;