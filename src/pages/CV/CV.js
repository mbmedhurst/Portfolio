import React from 'react'
import Grid from '@material-ui/core/Grid'



const CV = _ => {

    return (
        <>
            <Grid container fixed>
                <Grid item id='sidebar' sm={0} md={3}>
                </Grid>
                <Grid item id='main' sm={12} md={9}>
                    <div className='header'>CV</div>
                    <div className='subHeader'>Some samples of my work. Unless specifically stated, all front-end and back-end work was done by me.</div>
                </Grid>
            </Grid>
        </>
    )
}

export default CV