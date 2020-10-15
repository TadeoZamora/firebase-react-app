import React,{ createContext,useState } from 'react';

export default User = createContext({
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
    const SetUserState = (key,value) => {
        setUser({
            ...user, [key] : value
        })
    }
    return (
        <User.Provider
            value={{
                user : user,
                SetUserState : SetUserState
            }}
        >
            {
                children
            }
        </User.Provider>
    );
};

export default UserContext;