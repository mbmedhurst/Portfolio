import React from 'react'
import 'typeface-roboto'
import './Home.css'
import '../../components/Sidebar/Sidebar.css'
import Grid from '@material-ui/core/Grid'


const Home = props => {
    return (
        <Grid className='overlay' container fixed>
            <Grid item id='sidebar' xs={4}>
            </Grid>
            <Grid item id='main' xs={8} style={{marginTop: '10%', color: 'white'}}></Grid>
        </Grid>
    )
}

export default Home