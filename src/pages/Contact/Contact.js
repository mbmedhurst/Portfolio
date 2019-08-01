import React from 'react'
import './Contact.css'
import ContactPaper from '../../components/Contact'
import Grid from '@material-ui/core/Grid'

const Contact = _ => {

    return (
        <>
            <Grid container fixed>
                <Grid item id='sidebar' sm={0} md={3}></Grid>
                <Grid item className='main' sm={12} md={9}>
                    <div className='header'>Contact</div>
                    <div className='subHeader'></div>
                    <ContactPaper />
                    </Grid>
                </Grid>
                
        </>
    )
}

export default Contact