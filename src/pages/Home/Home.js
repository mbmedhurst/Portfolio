import React from 'react'
import '../../components/Sidebar/Sidebar.css'
import Sidebar from '../../components/Sidebar'
import Grid from '@material-ui/core/Grid'
import './Home.css'

const Home = props => {
    return (
        <Grid container fixed>
            <Grid item id='sidebar' xs={4}>
            </Grid>
            <Grid item id='main' xs={8} style={{marginTop: '10%', color: 'white'}}><h1>Hello World</h1></Grid>
        </Grid>
    )
}

export default Home