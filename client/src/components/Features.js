import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core';
import ImageCard from './ImageCard';
import ImageCard2 from './ImageCard2';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '150vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
}));


export default function Features() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
    <ImageCard2/>
    <ImageCard/>
    </div>
  )
}