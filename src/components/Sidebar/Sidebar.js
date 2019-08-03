import React from 'react'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    bigAvatar: {
        marginTop: 40,
        marginBottom: 10,
        width: 150,
        height: 150,
    }
}))



const Sidebar = props => {
    const classes = useStyles();

    return (
        <Grid item className='sidebar' spacing={2} style={{

        }}>
            <Grid item xs={12}
                style={{ height: '100%', color: 'white' }}>
                <Grid container justify='center' alignItems='center'>
                    <Avatar alt='Photo of Marianna' src='./sampleAvi.jpg' className={classes.bigAvatar} />
                </Grid>
                <Grid item xs={12} style={{ color: 'white', textAlign: 'center', fontSize: '30px', marginTop: '20px' }}>
                    Marianna Medhurst
                </Grid>
                <Grid item xs={12} style={{ color: 'white', textAlign: 'center', fontSize: '20px', marginTop: '10px'}}>
                Full-Stack Developer
                </Grid>
                <Grid item xs={12} style={{ marginTop: '30px'}}>
                    <MenuList style={{ marginLeft: '15%' }}>
                        <Link className='link' to='/'>
                            <MenuItem>Home</MenuItem>
                        </Link>
                        <Link className='link' to='/about'>
                            <MenuItem>About Me</MenuItem>
                        </Link>
                        <Link className='link' to='/portfolio'>
                            <MenuItem>Portfolio</MenuItem>
                        </Link>
                        <Link className='link' to='/contact'>
                            <MenuItem>Contact</MenuItem>
                        </Link>
                    </MenuList>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Sidebar