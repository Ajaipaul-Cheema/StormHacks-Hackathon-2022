import React, { useEffect, useState } from 'react'

import { AppBar, Button, Collapse, CssBaseline, IconButton, makeStyles, Menu, MenuItem, Toolbar } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    appbar: {
        background: 'none',
        fontFamily:'Ubuntu'
    },
    appbarWrapper:{
        margin:'0 auto',
      
    },
    appbarTitle: {
        flexGrow: '1',
        
    },
    icon: {
        color: '#fff',
        fontSize:'2rem',
    },
    colorText:{
        color:"#3895D3",
       
    },
    container:{
        textAlign: 'center'
    },
    title:{
        color: '#fff',
        fontSize:'2.75rem',
        fontFamily: 'Ubuntu'
        
    },
    goDown:{
        color:"#3895D3",
        fontSize: '4rem',
        
    },
    dashTitle:{
        textAlign: 'center',
        color: '#fff',
        fontSize:'4rem',
        fontFamily: 'Ubuntu',
      },
      subText:{
        color: '#fff',
        fontSize:'1rem',
        fontFamily: 'Ubuntu'
      }

}));

export default function Dash_Header() {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    

    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])
    

    return (
        <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>
                    Study<span className={classes.colorText}>Space.</span>
                </h1>
            </Toolbar>
        </AppBar>


        <Collapse in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}>

            <div className={classes.container}>
                <h1 className={classes.title}>
                    Learn your way with <br />
                    Study<span className={classes.colorText}>Space.</span> 
                     <br/>
                </h1>
                <Button className = {classes.subText} onClick = {scrollToBottom}>
                    Study Options Available Below
                </Button>




            </div>
        </Collapse>
    </div>
    )
}
