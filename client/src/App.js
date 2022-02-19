import './App.css';
import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './components/Header'
import Features from './components/Features'
import ShowProfile from "./components/Form";
import SignInOutContainer from './containers/SignInOutContainer';
import './App.css';
import Form from './components/Form'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/kia.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Form />
      {/* <CssBaseline/>
      <Header />
      <Features /> */}
    </div>
  );
}

export default App;