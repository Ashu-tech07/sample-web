import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Contactus from './Contactus';
import { Link } from 'react-router-dom';

interface IProps {
}

interface IStates {
    open: boolean;
}

export default class Header extends Component<IProps, IStates>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: false,
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = (event: any, reason: any) => {
        if (reason !== 'backdropClick') {
            this.setState({ open: false });
        }
    }

    render() {
        return (
            <>    
            <AppBar position='sticky' sx={header.appBar}>
                        <Toolbar>
                            <Typography variant='h5' sx={header.title}>Sample Websites</Typography>
                            <Link to='/home'>
                                <Button variant='text' sx={header.btn}>Home</Button>
                            </Link>
                            <Link to='/services'>
                                <Button variant='text' sx={header.btn}>Services</Button>
                            </Link>
                            <Link to='/about'>
                                <Button variant='text' sx={header.btn} >About</Button>
                            </Link>
                            <Button variant='text' sx={header.btn}  onClick={this.handleOpen}> Contact Us </Button>
                            <Contactus status={this.state.open} handleClose={this.handleClose} />
                        </Toolbar>
                    </AppBar>
            </>
        )
    }
}

const header = {
    appBar: {
        background: 'white',
        boxShadow: 'none',
        minHeight: '10vh',
        height: '10vh',
    },
    title:{
        color: '#e64a19',
            fontStyle: 'bold',
            fontWeight: '600',
            flexGrow: 1,
            gutterBottom:true,
    },
    btn:{
        textTransform: 'capitalize',
        fontWeight: '600',
        color:'#009688',
    }
}

