import React,{Component} from 'react';

import './dashboard.styles.scss';
import { Link } from 'react-router-dom';

import InfoCard from '../../components/info-card/info-card.component';
import ShowCard from '../../components/showcard/showcard.component';


class Dashboard extends Component{

    constructor(){
        super();
        this.state={
            contributor:false,
            todo:'',
            doing:'',
            done:'',
            createtodo:false,
            createdoing:false,
            createdone:false
        }
    }


    showcontribution=()=>{
        this.setState(prevState=>({contributor:!prevState.contributor}))
    }

    createtodo=()=>{
        this.setState(prevState=>({createtodo:true}))
    }
    doing=()=>{
        this.setState(prevState=>({doing:true}))
    }
    done=()=>{
        this.setState(prevState=>({done:true}))
    }
    changevisibility1=()=>{
        this.setState({createtodo:false});
    }
    changevisibility2=()=>{
        this.setState({doing:false});
    }
    changevisibility3=()=>{
        this.setState({done:false});
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
                            <h3>AMAN</h3>
                            <h3>AMAN</h3>
                            <h3>BHARTI</h3>
                        </div>


                    <div className="project-info">

                        <div className="info info-todo">
                                Things to do
                                <div className="info-box">

                                </div>
                                <InfoCard link="hello" visibility={this.state.createtodo} changevisibility={this.changevisibility1}></InfoCard>
                                <div className="info-add" onClick={this.createtodo} >+ Add card</div>
                        </div>
                        <div className="info info-doing">
                                Doing
                                <div className="info-box">

                                </div>
                                <InfoCard link="hello2" visibility={this.state.doing} changevisibility={this.changevisibility2}></InfoCard>
                                <div className="info-add" onClick={this.doing}>+ Add card</div>
                        </div>

                        <div className="info info-done">
                                Done
                                <div className="info-box">

                                </div>
                                <InfoCard link="hello3" visibility={this.state.done} changevisibility={this.changevisibility3}></InfoCard>
                                <div className="info-add" onClick={this.done}>+ Add card</div>
                        </div>
                    </div>

                </div>
                


            </div>
        )
    }
}

export default Dashboard;