import React from 'react'
import './Portfolio.css'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    body1: {
        marginTop: '20px'
    }
}))

const Portfolio = _ => {
    const classes = useStyles();

    return (
        <>
            <Grid container fixed>
                <Grid item id='sidebar' sm={0} md={3}>
                </Grid>
                <Grid item id='main' sm={12} md={9}>
                    <div className='header'>Portfolio</div>
                    <div className='subHeader'>Some samples of my work. Unless specifically stated, all front-end and back-end work was done by me.</div>
                    <Paper id='appInfo' className={classes.root}>
                        <Grid container style={{ border: '1px solid blue' }}>
                            <Grid item sm={12} md={6} className='appDesc' style={{ border: '1px solid orange' }}>
                                <Typography className='appName' variant="h5" component="h3">
                                    #Adulting
                                </Typography>
                                <Typography component="p" className='appDesc' style={{ marginTop: '10px' }}>
                                    An app that helps families manage household chores, allows parents to use incentives to .
                                    <p>For this app I worked on a team with three other people. It was the final project for my Coding Bootcamp course.</p>
                                </Typography>
                                <Grid container sm={12} style={{ border: '1px solid green' }}>
                                    <Grid item sm={6}>
                                        <ul>
                                            <li>React.js</li>
                                            <li>Mongodb</li>
                                            <li>Material UI</li>
                                        </ul>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ul>
                                            <li>React.js</li>
                                            <li>Mongodb</li>
                                            <li>Material UI</li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12} md={6} className='appImg' style={{ border: '1px solid red' }}>
                                    app image
                                </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Portfolio