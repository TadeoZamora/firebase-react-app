import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../context/UserContext';
import firebase from '../services/Firebase'
const LoginHook = () => {
    let history = useHistory()
    const { SetUserState } = useContext(User)
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
            //change the state for true, giving access to admin layout 
            SetUserState('isAuthenticated',true)
            //using react-router redirect the user at admin page
            history.push('/admin/home')
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