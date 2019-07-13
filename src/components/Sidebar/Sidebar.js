import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
    bigAvatar: {
      margin: 30,
      width: 150,
      height: 150,
    },
  })

const Sidebar = _ => {
    const classes = useStyles()      
    return (
        <Grid container style={{margin: '0', position: 'fixed', width: '25%', height: '100%', backgroundColor: 'rgba(255, 83, 61,0.9)', border: '1px solid grey'}} spacing={2}>
            <Grid item xs={12} style={{height: '100%', color: 'white'}}>
                <Grid container justify='center' alignItems='center'>
                    <Avatar alt='Photo of Marianna' src='./sampleAvi.jpg' className={classes.bigAvatar} />
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Sidebar