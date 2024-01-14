import React, { Component } from 'react'
import { Typography, Grid, Box } from '@mui/material'


export class About extends Component {
  render() {
    return (
     <Grid container justifyContent={'center'} alignItems={'center'}
     sx={{ minHeight: '80vh', height: '80vh',}}>
      <Grid item xs={6} justifyContent={'center'} >
     <Box sx={{borderRadius:'15px',}}>
      <Typography sx={{fontSize:'36px', fontStyle:'bold', color:'#26a69a',
                textAlign:'center', fontWeight:'600'}}>About Us</Typography>
                <Typography fontFamily={'serif'} fontSize={20} textAlign={'center'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta laboriosam 
                    minima aut enim, repudiandae necessitatibus cumque animi aperiam sequi nostrum totam 
                    dolore, voluptatum adipisci molestiae, voluptas quidem maxime deleniti.</Typography>
                </Box>
      </Grid>
     </Grid>
    )
  }
}

export default About
