import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import React from "react";
import { useNavigate } from "react-router-dom";
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    const { user, isAuthenticated, isLoading } = useAuth0();
    let navigate = useNavigate()

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isAuthenticated) {
        console.log("user: ", user);
        axios.put('https://8xfxl0fcfc.execute-api.us-east-1.amazonaws.com/users', {
            users: user.email,
            data: user
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*',
                }
            })
            .then(function (response) {
                console.log(response);
                navigate('/main')
            }
            
        )
        // navigate('/Main')

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginWithRedirect();

    };


    return (
        <div className='body1'>
        <h1 className='header'>Login</h1><br></br>
        <button className='header' onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    ) 

};

export default LoginButton;