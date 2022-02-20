import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './signup.css';

const Login = () => {
    const paperStyle = { padding: 20, height: 210 ,width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const navigate = useNavigate();

    function handleSubmit(event) {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        let arr = {}
        for (let [key, value] of formData.entries()) {
            arr[key] = value
        }

        axios.post('http://localhost:5000/auth/login', {
            username: arr['username'],
            password: arr['password'],
        }).then((res) => {
            localStorage.setItem("token", res.data['token'])
            console.log(localStorage.getItem("token"))
            return navigate('/dashboard')
        }).catch((err) => {
            console.log(err)
            alert("Wrong Username or Password")
        })
    }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Login</h2>
                    <br></br>
                </Grid>
                <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <br></br><br></br>
                    <button id="signin-button"  type="submit">Login</button>
                </form>
                </div>
            </Paper>
        </Grid>
    )
}

export default Login;