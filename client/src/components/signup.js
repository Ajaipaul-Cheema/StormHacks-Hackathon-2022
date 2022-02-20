import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
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

        axios.post('http://localhost:5000/auth/signup', {
            username: arr['username'],
            password: arr['password'],
            email: arr['email']
        }).then((res) => {
            localStorage.setItem("token", res.data['token'])
            console.log(localStorage.getItem("token"))
            return navigate('/dashboard')
        }).catch((err) => {
            console.log(err)
            alert("Username or Email already exists")
        })
    }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <br></br>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <br></br>
                    <button type="submit">Sign up</button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;