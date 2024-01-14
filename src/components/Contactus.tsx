
import React, { Component } from 'react'
import ContactsIcon from '@mui/icons-material/Contacts';
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
import { Typography,
     Button, 
     Modal, 
     TextField, 
     Grid, 
     Avatar, 
     Box, 
     IconButton, 
     createTheme, 
     ThemeProvider } from '@mui/material'


interface IStates {
    fname?: string,
    lname?: string,
    email?: string,
    phone?: string,
    subject?: string,
    message?: string,
}
interface IProps {
    status?: boolean,
    handleClose?: any
}

export default class Contactus extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        }
    }

    handleChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e: any) => {
        console.log(this.state);
        alert(JSON.stringify(this.state))
        e.preventDefault();
    }

    render() {
        return (
          <ThemeProvider theme={theme}>
                <Modal
                    open={this.props.status || false}
                    onClose={this.props.handleClose}
                    aria-labelledby='login-modal'
                    aria-describedby='login-modal-details'

                >
                    <Grid container>
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 340,
                            height: 'auto',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            pt: 0,
                            borderRadius: '15px'

                        }} >
                            <IconButton sx={{ position: 'relative', left: '96%' }} onClick={this.props.handleClose}>
                                <CancelIcon />
                            </IconButton>
                            <Grid item display={'flex'} justifyContent={'center'} direction={'column'}>
                                <Avatar sx={{ bgcolor: 'red', alignSelf: 'center' }}>
                                    <ContactsIcon />
                                </Avatar>
                                <Typography variant='h4' alignSelf={'center'} sx={{ margin: 1 }}>Contact Us</Typography>
                            </Grid>
                            <form onSubmit={(e) => { this.handleSubmit(e) }} >
                                <Grid container justifyContent={'space-evenly'} spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField sx={contact.textField} label='First Name' placeholder="Enter first name"
                                            name='fname' value={this.state.fname} onChange={(e) => { this.handleChange(e) }} required />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField sx={contact.textField} label='Last Name' placeholder="Enter your last name"
                                            name='lname' value={this.state.lname} onChange={(e) => { this.handleChange(e) }} />
                                    </Grid>
                                </Grid>
                                <TextField sx={contact.textField} label='Email' type='email' placeholder="abc@gmail.com"
                                    name='email' value={this.state.email} onChange={(e) => { this.handleChange(e) }} required />
                                <TextField sx={contact.textField} label='Phone Number' type='number' placeholder="Enter your phone number"
                                    name='phone' value={this.state.phone} onChange={(e) => { this.handleChange(e) }} />

                                <TextField sx={contact.textField} label='Subject' placeholder="What issue/suggestion do you have?"
                                    name='subject' value={this.state.subject} onChange={(e) => { this.handleChange(e) }} />
                                <TextField sx={contact.textField} id="outlined-multiline-flexible" multiline rows={2} label='Message'
                                    placeholder="Query/Suggestion..." name='message' value={this.state.message} onChange={(e) => { this.handleChange(e) }} />
                                <Grid display={'flex'} margin={'auto'}>
                                    <Button size="small" type='submit' variant='contained' sx={{ textTransform: 'capitalize', bgcolor: '#009688' }} endIcon={<SendIcon />}>Send Message</Button>
                                    <Button size="small" variant='contained' color='error' onClick={this.props.handleClose} sx={{ ml: 'auto', textTransform: 'capitalize', bgcolor: '#ef5350' }}>Close</Button>
                                </Grid>
                            </form>
                        </Box>
                    </Grid>
                </Modal>
                </ThemeProvider>
        )
    }
}

const theme = createTheme({
    components: {
        MuiTextField: {
            defaultProps:{
                size:'small',
                fullWidth:true,
            },
        },
    },

})

const contact={
    textField:{
        marginBottom:1,
    }
}

