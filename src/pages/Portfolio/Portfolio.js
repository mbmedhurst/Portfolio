import React from 'react'
import './Portfolio.css'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        // borderBottom: '1px solid #ff0844',
        // borderLeft: '1px solid #FF533D',
        color: '#555555'
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
                        <Grid container>
                            <Grid item sm={12} md={6} className='appDesc'>
                                <Typography className='appName' variant="h5" component="h3" style={{ fontWeight: 'bold' }}>
                                    <a id='appLink' target="_blank" href='https://adultingapp.herokuapp.com/'>#Adulting</a>
                                </Typography>
                                <hr></hr>
                                <Typography component="p" className='appDesc' style={{ marginTop: '10px' }}>
                                    An app that helps families manage household chores while teaching children that hard work pays off.
                                    <p>Responsible for all of the styling throughout the app, created the graph component on the dashboard,  coded and styled the component that dynamically adds avatars to the main menu.</p>
                                </Typography>
                                <Grid container sm={12} className='listCont'>
                                    <Grid item sm={6}>
                                        <ul>
                                            <li className='listItem'>React</li>
                                            <li className='listItem'>React Hooks</li>
                                            <li className='listItem'>MongoDB</li>
                                            <li className='listItem'>Material UI</li>
                                        </ul>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ul>
                                            <li className='listItem'>Passport</li>
                                            <li className='listItem'>Chart.js</li>
                                            <li className='listItem'>Random Color</li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12} md={6} className='imgCont' style={{ margin: 'auto' }}>
                                <img className='appImg' alt='Adulting Screenshot' src='./images/adulting.jpg'></img>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper id='appInfo' className={classes.root}>
                        <Grid container>
                            <Grid item sm={12} md={6} className='appDesc'>
                                <Typography className='appName' variant="h5" component="h3" style={{ fontWeight: 'bold' }}>
                                    <a id='appLink' target="_blank" href='https://clickygamembm.herokuapp.com/'>The Clicky Game</a>
                                </Typography>
                                <hr></hr>
                                <Typography component="p" className='appDesc' style={{ marginTop: '10px' }}>
                                    A memory game - try not to click on the same image twice.
                                </Typography>
                                <Grid container sm={12}>
                                    <Grid item sm={6}>
                                        <ul>
                                            <li className='listItem'>React</li>
                                            <li className='listItem'>Material UI</li>
                                            <li className='listItem'>Shuffle-Array (npm)</li>
                                        </ul>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ul>
                                            <li className='listItem'>Subtle Patterns (background patterns)</li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12} md={6} className='imgCont' style={{ margin: 'auto' }}>
                                <img className='appImg' alt='Clickygame Screenshot' src='./images/clickygame.jpg'></img>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper id='appInfo' className={classes.root}>
                        <Grid container>
                            <Grid item sm={12} md={6} className='appDesc'>
                                <Typography className='appName' variant="h5" component="h3" style={{ fontWeight: 'bold' }}>
                                    <a id='appLink' target="_blank" href='https://googlebooksmbm.herokuapp.com/'>Google Book Search</a>
                                </Typography>
                                <hr></hr>
                                <Typography component="p" className='appDesc' style={{ marginTop: '10px' }}>
                                    Search, view, save and delete books
                                </Typography>
                                <Grid container sm={12}>
                                    <Grid item sm={6}>
                                        <ul>
                                            <li className='listItem'>React</li>
                                            <li className='listItem'>Google Books API</li>
                                        </ul>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ul>
                                            <li className='listItem'>MongoDB</li>
                                            <li className='listItem'>Material UI</li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12} md={6} className='imgCont' style={{ margin: 'auto' }}>
                                <img className='appImg' alt='Adulting Screenshot' src='./images/googlebooks.png'></img>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper id='appInfo' className={classes.root}>
                        <Grid container>
                            <Grid item sm={12} md={6} className='appDesc'>
                                <Typography className='appName' variant="h5" component="h3" style={{ fontWeight: 'bold' }}>
                                    <a id='appLink' target="_blank" href='https://mbmedhurst.github.io/Train-Time/'>Train Time</a>
                                </Typography>
                                <hr></hr>
                                <Typography component="p" className='appDesc' style={{ marginTop: '10px' }}>
                                    Train schedule app - add a train to the schedule and the table will display what time the train will arrive and how many minutes away it is.
                                </Typography>
                                <Grid container sm={12}>
                                    <Grid item sm={6}>
                                        <ul>
                                            <li className='listItem'>HTML5</li>
                                            <li className='listItem'>CSS3</li>
                                                                                    </ul>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ul>
                                            <li className='listItem'>Moment.js</li>
                                            <li className='listItem'>Firebase</li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12} md={6} className='imgCont' style={{ margin: 'auto' }}>
                                <img className='appImg' alt='Traintime Screenshot' src='./images/traintime.png'></img>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Portfolio