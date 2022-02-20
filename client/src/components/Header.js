import React, { useEffect, useState } from 'react'
import SortIcon from '@material-ui/icons/Sort'
import { AppBar, Collapse, CssBaseline, IconButton, makeStyles, Menu, MenuItem, Toolbar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    appbar: {
        background: 'none',
        fontFamily: 'Ubuntu'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',

    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',


    },
    colorText: {
        color: "#3895D3",

    },
    container: {
        textAlign: 'center'
    },
    title: {
        color: '#fff',
        fontSize: '2.75rem',
        fontFamily: 'Ubuntu'

    },
    goDown: {
        color: "#3895D3",
        fontSize: '4rem',

    }
}));

export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClose = () => {
        setAnchorEl(null)
    }

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget)

        
    }

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
                    <IconButton onClick={openMenu}>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link to="/auth">Login/Sign Up</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>About StudySpace</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>


            <Collapse in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}>

                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Connect with friends at <br />
                        Study<span className={classes.colorText}>Space.</span>
                    </h1>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} onClick = {scrollToBottom} />
                    </IconButton>

                </div>
            </Collapse>
        </div>
    )
}
