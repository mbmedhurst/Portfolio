import React from 'react'
import './About.css'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'



const AboutMe = _ => {

    return (
        <>
            <Grid container fixed>
                <Grid item id='sidebar' sm={0} md={3}></Grid>
                <Grid item className='main' sm={12} md={9}>
                    <div className='header'>About Me</div>
                    <Grid item sm={12} >
                        <Typography id='sectionHeader'>I Love LA</Typography>
                    </Grid>
                    <Grid item sm={12} >
                        <Typography id='paragraphBody'>
                        I am a Southern California native, born and raised a few blocks from the Pacific Ocean. I studied English in college, getting both my Bachelor’s and my Master’s from Loyola Marymount University.
                        <p>Frustrated and bored with my admin job, but not knowing what I wanted to do, I moved to San Diego to take yet another admin job with Elsevier, a large publisher of scholarly journals. I figured that at least in a large company there would be plenty of opportunities for advancement. I was right.</p>
                        </Typography>
                    </Grid>
                    <Grid item sm={12} >
                        <Typography id='sectionHeader'>London Calling</Typography>
                    </Grid>
                    <Grid item sm={12} >
                        <Typography id='paragraphBody'>
                            Within three years I was the Advertising Coordinator in San Diego, and a year after that I was seconded to the UK as an Application Manager for their advertising billing system. I quickly learned that billing systems are far more than order entry and invoicing. There was not a department in that company that I didn’t work with, nor was there a hat that I didn’t wear at one point or another -- tech support, training, credit & collections, revenue reconciliation, technical writing, business analysis, compliance auditing...the list goes on.
                            <p>But, as all good things must come to an end, I moved on from Elsevier and joined Achilles as their Business Validation and Training Manager, conducting User Acceptance and Usability testing on their subscription-based SaaS system, while also supervising their user training program.</p>
                        </Typography>
                    </Grid>
                    <Grid item sm={12} >
                        <Typography id='sectionHeader'>California Here I Come</Typography>
                    </Grid>
                    <Grid item sm={12} >
                        <Typography id='paragraphBody'>
                            I returned to California a few years ago, this time with a husband and a furry family in tow. I started working as a freelance software tester, at first continuing my relationship with Achilles and then later taking on new clients.
                            <p>Looking for a new challenge, in 2019 I completed a coding bootcamp at UCI. My goal is to transition into a career as a full-time developer.</p>
                            <p>If you’d like to learn more about my career history, please visit my <a style={{fontWeight: 'bold'}} target="_blank" href='https://www.linkedin.com/in/mariannamedhurst/'>LinkedIn</a> page.</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutMe