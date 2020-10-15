import {useState} from 'react';

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
    
    return {
        user,
        setUserData
    }
};

export default LoginHook;