import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';




import './signup.styles.scss';

class signup extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

handleSubmit = async event=>{
    event.preventDefault();
    const {displayName,email,password,confirmPassword}= this.state;

    if(password !== confirmPassword){
        alert("Password don't match");
        return;
    }

    // try{
    //     // const {user} = await auth.createUserWithEmailAndPassword(email,password);
    //     // await createUserProfileDocument(user,{displayName});
    //     // this.setState({
    //     //     displayName:'',
    //     //     email:'',
    //     //     password:'',
    //     //     confirmPassword:''
    //     })
    // }catch(error){
    //     console.error(error);
    // }
}

handleChange = event=>{
    const {name,value} = event.target;

    this.setState({[name]:value});
}


    render(){
        const {displayName,email,password,confirmPassword}= this.state;
        return(
            <div className='sign-up'>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    
                <h2 className="title">I do not have an account</h2>
                <span>Signup with your email and password</span>
                <FormInput 
                type='text'
                name ='displayName'
                value={displayName}
                onChange={this.handleChange}
                label='Display Name'
                required>
                </FormInput>

                <FormInput 
                type='email'
                name ='email'
                value={email}
                onChange={this.handleChange}
                label='EMAIL'
                required>
                </FormInput>

                <FormInput 
                type='password'
                name ='password'
                value={password}
                onChange={this.handleChange}
                label='Password'
                required>
                </FormInput>

                <FormInput 
                type='password'
                name ='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label='confirm Password'
                required>
                </FormInput>

                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default signup;