import {useState} from 'react';
import firebase from '../services/Firebase'
const LoginHook = () => {
    const [user, setUser] = useState({
        email : '',
        password : ''
    });
    
    const setUserData = (ev) =>{
        setUser({
            ...user, [ev.target.name] : ev.target.value
        })
    }
    
    const logIn = async () =>{
        try {
            let response = await firebase.auth().signInWithEmailAndPassword(user.email,user.password)
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    const signUp = async () =>{
        try {
            let response = await firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }
    return {
        user,
        setUserData,
        signUp,
        logIn
    }
};

export default LoginHook;