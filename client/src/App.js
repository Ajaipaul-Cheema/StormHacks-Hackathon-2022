import './App.css';
import React from 'react';
import { Button, CssBaseline, makeStyles } from '@material-ui/core';
import Header from './components/Header'
import Features from './components/Features'
import SignInOutContainer from './containers/SignInOutContainer';
import { Routes, Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Sharedtextarea from './components/Sharedtextarea';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/kia.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <div className = {classes.root}>
        <CssBaseline />
        <Header />
        <Features />
      </div>
    </div>
  );
}
// function App() {
//   const classes = useStyles();
//   return (
//     <div className = {classes.root}>
//       {/* <CssBaseline/>
//       <Header />
//       <Features /> */}
//     </div>
//   );
//}
