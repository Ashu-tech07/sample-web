import { Accordion, AccordionDetails, AccordionSummary, Typography, Grid } from '@mui/material'
import React, { Component } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IProps { }

interface IStates {
    expanded: boolean | string,
}

export class Services extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            expanded: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (panel: any) => (event: any, isexpanded: boolean) => {
        this.setState({
            expanded: isexpanded ? panel : false
        })
    }
    render() {
        const { expanded } = this.state;
        return (
            <Grid container sx={{ minHeight: '80vh', height: '80vh', marginTop: 6 }} spacing={3} >
                <Grid item xs={6} >
                    <Typography sx={{
                        fontSize: '36px', fontStyle: 'bold', color: '#26a69a',
                        textAlign: 'center', fontWeight: '600'
                    }}>Our Services</Typography>
                    <Typography fontFamily={'serif'} fontSize={20} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta laboriosam
                        minima aut enim, repudiandae necessitatibus cumque animi aperiam sequi nostrum totam
                        dolore, voluptatum adipisci molestiae, voluptas quidem maxime deleniti.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Accordion expanded={this.state.expanded === 'panel1'}
                        onChange={this.handleChange('panel1')} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1b-content'
                            id='panel1b-header'
                        >
                            <Typography>Web Development</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={this.state.expanded === 'panel2'}
                        onChange={this.handleChange('panel2')} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel2b-content'
                            id='panel2b-header'
                        >
                            <Typography>Android App Development</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={this.state.expanded === 'panel3'}
                        onChange={this.handleChange('panel3')} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1b-content'
                            id='panel1b-header'
                        >
                            <Typography>iOS App Deveopment</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={this.state.expanded === 'panel4'}
                        onChange={this.handleChange('panel4')} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel2b-content'
                            id='panel2b-header'
                        >
                            <Typography>Web Services</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>


            </Grid>
        )
    }
}

export default Services
