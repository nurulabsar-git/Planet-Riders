import React, { useContext, useState } from 'react';
import { ThemContext } from '../../App';

import { initializeLoginFramework, createUserWithEmailAndPassword, handleFacebookSignIn, handleGoogleSignIn, signInWithEmailAndPassword } from './LogInManager';
import './LogIn.css';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';


const LogIn = () => {
 
const [loggedUser, setLoggedUser] = useContext(ThemContext);

initializeLoginFramework();

   const history = useHistory();
   const location = useLocation()
   const { from } = location.state || { from: { pathname: "/" } };

 const [newUser, setNewUser] = useState(false);
 const [user, setUser] = useState({
    isSingIn : false,
    name : '',
    email : '',
    photo: ''
 });

 const handleResponse = (result, redirect) => {
    setUser(result);
    setLoggedUser(result);
    if(redirect){
      history.replace(from);
    }
   }

   const handleBlur = (hello) =>{
    
    let isFormValid = true;
    if(hello.target.name === 'email'){
    isFormValid = /\S+@\S+\.\S+/.test(hello.target.value);
   
    }
    if(hello.target.name ==="password"){
      const isPasswordValid = hello.target.value.length > 8;
      const passwordHasNumber = /\d{1}/.test(hello.target.value);
       isFormValid = isPasswordValid && passwordHasNumber;
    }

    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[hello.target.name] = hello.target.value;
      setUser(newUserInfo);

    }
  }



const handleSubmit = (hello) => {
  // console.log(user.email, user.password)
  if(newUser && user.email && user.password){
   createUserWithEmailAndPassword(user.name, user.email, user.password)
   .then(result => {
     handleResponse(result, true);
   })

}
  if(!newUser && user.email && user.password) {
  signInWithEmailAndPassword(user.email, user.password)
  .then(result => {
    handleResponse(result, true);
  })
}


hello.preventDefault();
}



const updateUserName = name =>{

    const user = firebase.auth().currentUser;
 
     user.updateProfile({
       displayName: name
     }).then( function () {
       console.log('user info updated successfully');
     })
     .catch(function(error) {
       console.log(error);
     });
 
   }


   

   const googleSignIn = () =>{
    handleGoogleSignIn()
    .then(result =>{
       handleResponse(result, true);
      
      })
  }


   const fbSignIn = () => {

    handleFacebookSignIn()
    .then(result => {
      handleResponse(result, true);
    })  
    }

    return (
        <div className="login-part" style={{textAlign: 'center'}}>
    <section>

    
   
    
    <h1>Please Confirm Your Address</h1>
    <input onChange={() => setNewUser(!newUser)} type="checkbox" name="newUser" />
    <label htmlFor="newUser">New User Sign up</label>

    <form onSubmit={handleSubmit}>
    {newUser && <input  onBlur={handleBlur} name= "name" type="text" placeholder="your name"/>
   } <br/>
     
    <input onBlur={handleBlur} type="text" name="email" placeholder="Please Enter Your Email Address" required /> <br/>
   
    <input onBlur={handleBlur} type="password" name="password" placeholder="Please Enter Your Password" required/> <br/>
    
    <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
    </form>


   <h6>OR</h6>
   <button onClick={googleSignIn}><i class="fa fa-google" aria-hidden="true"></i>  Sign in with google</button> <br/>
   <button onClick={fbSignIn}><i class="fa fa-facebook-square" aria-hidden="true"></i> Sign in with facebook</button> <br/>




    <p style={{color: 'red'}}>{user.error}</p>
    {
      user.success && <p style={{color: 'green'}}>User {newUser ? 'created' : 'Logged in'} successfully</p>
    }

   
</section>
        
             
        </div>
    );
};

export default LogIn;