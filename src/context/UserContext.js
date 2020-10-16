import React,{ createContext,useState, useEffect } from 'react';
import firebase from '../services/Firebase'
export const User = createContext({
    email : '',
    name : '',
    isAuthenticated : false
})

const UserContext = ({...props}) => {
    const { children } = props
    const [ user, setUser ] = useState({
        email : '',
        name : '',
        isAuthenticated : false
    })
    const [loading, setLoading] = useState(true);
    const SetUserState = (key,value) => {
        setUser({
            ...user, [key] : value
        })
    }
    const ValidateUserAccess = async ( ) => {
        //this observable is listening avery change with the user authentication data
        //if the user signout, this observable will return null
        firebase.auth().onAuthStateChanged(userData => {
            console.log('[User]',user.isAuthenticated)
            if (userData !== null) {
                setUser({
                    ...user,  isAuthenticated : true
                })
            }
            setLoading(false)
        })
        return
    }
    const LogOut = async ( )=>{
        //signOut remove the user from firebase
        await firebase.auth().signOut()
        setLoading(false)
        setUser({
            ...user,  isAuthenticated : false
        })
    }
    
    return (
        <User.Provider
            value={{
                user : user,
                SetUserState : SetUserState,
                ValidateUserAccess : ValidateUserAccess,
                LogOut : LogOut,
                loading : loading
            }}
        >
            {
                children
            }
        </User.Provider>
    );
};

export default UserContext;