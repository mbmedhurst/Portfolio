import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginLeft: '10px',
        marginRight: '10px',
        width: 'auto'
    },
}))

const Portfolio = _ => {
    const classes = useStyles();

    return (
        <>
            <Grid container fixed>
                <Grid item id='sidebar' sm={0} md={3}>
                </Grid>
                <Grid item id='main' sm={12} md={9} style={{ marginTop: '10%', color: 'white' }}>
                    <Paper className={classes.root}>
                        <Typography variant="h5" component="h3">
                            This is a sheet of paper.
                        </Typography>
                        <Typography component="p">
                            Paper can be used to build surface or other elements for your application.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Portfolio