import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

const useStyles = makeStyles({
    bigAvatar: {
        marginTop: 40,
        marginBottom: 10,
        width: 150,
        height: 150,
    },
})

const Sidebar = props => {
    const classes = useStyles()
    return (
        <Grid item id='sidebar' spacing={2} style={{
            margin: '0',
            position: 'fixed',
            width: '25%',
            height: '100%',
            backgroundColor: 'rgba(255, 83, 61,0.9)',
            border: '1px solid grey',
            }}>
            <Grid item xs={12} style={{ height: '100%', color: 'white' }}>
                <Grid container justify='center' alignItems='center'>
                    <Avatar alt='Photo of Marianna' src='./sampleAvi.jpg' className={classes.bigAvatar} />
                </Grid>
                <Grid item xs={12} style={{ color: 'white', textAlign: 'center' }}>
                    <h2>Marianna Medhurst</h2>
                    <h3>Full-Stack Developer</h3>
                </Grid>
                <Grid item xs={12}>
                    <MenuList style={{marginLeft: '15%'}}>
                        <MenuItem>Portfolio</MenuItem>
                        <MenuItem>CV</MenuItem>
                        <MenuItem>Contact Me</MenuItem>
                    </MenuList>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Sidebar