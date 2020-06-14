import React from 'react';
import $ from 'jquery';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { Redirect } from 'react-router-dom';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            user:'',
            email: '',
            password : '',
            redirect: false
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }

    handleSubmit =async (event) =>{
        event.preventDefault();

        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: (JSON.stringify({email:this.state.email,password:this.state.password}))
            };
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const url = 'https://todomankibaat.herokuapp.com/auth/login'
            fetch(proxyUrl+url, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(data.status==='success'){
//                        localStorage.setItem("token",data.token)
                        alert('loggedIn successfully');
                        this.setState({email:'',password:''})
                        this.setState({user:data.user,redirect:true});
                    }
                    else{alert(data.message);}
                });
        }catch(error){
            alert('There is something wrong');
        }

    }

    handleChange = event=>{
        const {value,name} = event.target;
        this.setState({[name]: value})
    }

    render(){

        return(
            <div className='sign-in'>
                {this.renderRedirect()}
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
            <form onSubmit={this.handleSubmit}>
                <FormInput
                     name="email"
                     type="email" 
                     value={this.state.email}
                     label="email" 
                     handleChange={this.handleChange}
                     required />
                     
                <FormInput 
                     name="password" 
                     type="password" 
                     value={this.state.password}
                     label="password" 
                     handleChange={this.handleChange}
                     required />
                <div className='buttons'>
                <CustomButton type="submit" >sign in</CustomButton> 
               </div>
                
            </form>
            </div>

        )
    }
}

export default SignIn;