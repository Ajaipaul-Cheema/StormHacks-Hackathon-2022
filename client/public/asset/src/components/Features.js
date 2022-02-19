import React, { useEffect, useState } from 'react'

import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    }
}));


export default function Features() {
  const classes = useStyles();

  return (
    <div className = {classes.root}> </div>
  )
  }