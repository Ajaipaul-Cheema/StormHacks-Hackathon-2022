import { Navigate, Link } from "react-router-dom";
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Dash_Header from "./Dash_Header";
import Dash_Features from "./Dash_Features";



const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '150vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/kia.jpg"})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));


export default function Dashboard() {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            { localStorage.getItem("token") ? "" : <Navigate to="/auth">Click to Login/Sign Up</Navigate> }
            <Dash_Header/>
            <Dash_Features/>
        </div>
    )
}