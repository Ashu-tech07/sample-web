import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, ThemeProvider, Typography, createTheme } from '@mui/material'
import React, { Component } from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';



export default class Home extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>

                <Grid container className='main'>
                    <Grid item container margin={1} marginTop={4} justifyContent={'center'}>
                        <Grid item xs={8} >
                            <Typography variant='h2' sx={home.heading}>Pricing</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography  >
                                Quickly build an effective pricing table for your potential customers with this layout. It's
                                built with default Material-UI components with little customization.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} marginBottom={1} spacing={2} container justifyContent={'space-evenly'}
                        alignItems={'flex-end'}>
                        <Grid item xs={10} md={3} container flexDirection={'column'}>
                            <Card variant='outlined' sx={home.card} >
                                <CardHeader sx={home.cardHeader}
                                    title='Free'
                                />
                                <CardContent>
                                    <ThemeProvider theme={pricetheme}>
                                        <Grid container justifyContent={'center'}>
                                            <Grid item height={10} >
                                                <Typography variant="body1">
                                                    $0
                                                </Typography>
                                            </Grid>
                                            <Grid item height={10}>
                                                <Grid container height={10} flexDirection={'column'} justifyContent={'flex-end'}>
                                                    <Grid item height={2}>
                                                        <Typography variant="body2">
                                                            /mo
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </ThemeProvider>
                                </CardContent>
                                <CardContent>
                                    <Typography sx={home.cardContent}>10 Users included</Typography>
                                    <Typography sx={home.cardContent}>2GB of stoarge</Typography>
                                    <Typography sx={home.cardContent}>Help center access</Typography>
                                    <Typography sx={home.cardContent}>Email support</Typography>
                                </CardContent>
                                <CardActions>
                                    <Grid container xs={12} justifyContent={'center'}>
                                        <Button variant='contained'>Subscribe</Button>
                                    </Grid>
                                </CardActions>
                            </Card>

                        </Grid>
                        <Grid item xs={10} md={3} container flexDirection={'column'} >

                            <Card variant='outlined' sx={home.card}>
                                <CardHeader sx={home.cardHeader}
                                    action={
                                        <IconButton><StarOutlineIcon /></IconButton>
                                    }
                                    title='Pro'
                                    subheader='Most popular'
                                />
                                <CardContent >
                                    <ThemeProvider theme={pricetheme}>
                                        <Grid container justifyContent={'center'}>
                                            <Grid item height={10} >
                                                <Typography variant="body1">
                                                    $15
                                                </Typography>
                                            </Grid>
                                            <Grid item height={10}>
                                                <Grid container height={10} flexDirection={'column'} justifyContent={'flex-end'}>
                                                    <Grid item height={2}>
                                                        <Typography variant="body2">
                                                            /mo
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </ThemeProvider>
                                </CardContent>
                                <CardContent>
                                    <Typography sx={home.cardContent}>20 Users included</Typography>
                                    <Typography sx={home.cardContent}>10GB of stoarge</Typography>
                                    <Typography sx={home.cardContent}>Help center access</Typography>
                                    <Typography sx={home.cardContent}>Priority email support</Typography>
                                </CardContent>
                                <CardActions>
                                    <Grid container xs={12} justifyContent={'center'}>
                                        <Button variant='contained'>Subscribe</Button>
                                    </Grid>
                                </CardActions>
                            </Card>

                        </Grid>
                        <Grid item xs={10} md={3} container flexDirection={'column'}>

                            <Card variant='outlined' elevation={8} sx={home.card}>
                                <CardHeader sx={home.cardHeader}
                                    title='Enterprise'
                                />
                                <CardContent>
                                    <ThemeProvider theme={pricetheme}>
                                        <Grid container justifyContent={'center'}>
                                            <Grid item height={10} >
                                                <Typography variant="body1">
                                                    $30
                                                </Typography>
                                            </Grid>
                                            <Grid item height={10}>
                                                <Grid container height={10} flexDirection={'column'} justifyContent={'flex-end'}>
                                                    <Grid item height={2}>
                                                        <Typography variant="body2">
                                                            /mo
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </ThemeProvider>
                                </CardContent>
                                <CardContent>
                                    <Typography sx={home.cardContent}>50 Users included</Typography>
                                    <Typography sx={home.cardContent}>30GB of stoarge</Typography>
                                    <Typography sx={home.cardContent}>Help center access</Typography>
                                    <Typography sx={home.cardContent}>Phone & email support</Typography>
                                </CardContent>
                                <CardActions>
                                    <Grid container xs={12} justifyContent={'center'}>
                                        <Button variant='contained'>Subscribe</Button>
                                    </Grid>
                                </CardActions>
                            </Card>

                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>

        )
    }
}

const pricetheme = createTheme({
    typography: {
        body2: {
            fontSize: 14,
            textAlign: 'center',
            color: 'grey',
        },
        body1: {
            fontSize: 25,
        },
    },
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#009688',
        },
    },
});

const home = {
    heading: {
        color: '#009688',
        textTransform: 'capitalize',
        fontWeight: '600',
        textAlign: 'center',
        margin: '0',
    },
    card: {
        borderRadius: '13px',
    },
    cardContent: {
        textAlign: 'center',
    },
    cardHeader: {
        textAlign: 'center',
        background: '#26a69a',
        color: '#cddc37',
        fontSize: 26,
    },
}


