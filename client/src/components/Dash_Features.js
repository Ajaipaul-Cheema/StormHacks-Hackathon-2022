import React, { useEffect, useState } from 'react'

import { makeStyles, Grid, Container } from '@material-ui/core';
import VideoFeature from './VideoFeature';
import Summarize from './Summarize';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '75vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
}));


export default function Dash_Features() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
    <VideoFeature/>
    <Summarize/>
    </div>
  )
}