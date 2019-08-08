import React from 'react'
import './cv.css'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        color: '#555555'
    },
    body1: {
        marginTop: '20px'
    }
}))

const CV = _ => {
    const classes = useStyles();

    return (
        <>
            <Grid container fixed>
                <Grid item id='sidebar' sm={0} md={3}></Grid>
                <Grid sm={12} md={9}>
                    <div className='header'>Résumé</div>
                </Grid>
            </Grid>
        </>
    )
}

export default CV