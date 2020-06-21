import React from 'react';

import { signInWithGoogle } from './../../firebase/firebase.utils';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component{
  constructor(){
    super();
    this.state={
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({[name]: value})
  }

  render(){
    return(
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email</span>
        <form >
          <FormInput 
          handleChange={this.handleChange} name='email' 
          type='email' 
          value={this.state.email}
          label='email' 
          required />

          <FormInput 
          handleChange={this.handleChange} name='password' 
          type='password' 
          value={this.state.password} 
          required 
          label='password'  
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign In</CustomButton>
            <CustomButton google onClick={signInWithGoogle} > Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;