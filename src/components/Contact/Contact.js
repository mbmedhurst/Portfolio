import React from 'react'
import './ContactComp.css'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Mail from '@material-ui/icons/Mail'
import Phone from '@material-ui/icons/Phone'
import { Tab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#153B69',
        width: 'auto',
        paddingRight: '5px',
    },
    table: {
        borderColor: 'white'
    },
}))

const ContactPaper = _ => {
    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12} id='contactCont' className='contactInfo'>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell id='phoneLabel' className='contactLabel'>
                                    Telephone:
                                </TableCell>
                                <TableCell id='phoneIcon' className='contactIcon'>
                                    <Phone />
                                </TableCell>
                                <TableCell id='phoneTxt' className='contactText'>
                                    310.422.4837
                                </TableCell>
                            </TableRow>
                            <TableRow id='email'>
                                <TableCell id='emailLabel' className='contactLabel'>
                                    E-mail:
                                </TableCell>
                                <TableCell id='emailIcon' className='contactIcon'>
                                    <Mail />
                                </TableCell>
                                <TableCell id='emailTxt' className='contactText'>
                                    <a href='mailto:mbmedhurst@gmail.com'>
                                        mbmedhurst@gmail.com
                                    </a>
                                </TableCell>
                            </TableRow>
                            <TableRow id='linkedIn'>
                                <TableCell id='linkedInLabel' className='contactLabel'>
                                    LinkedIn:
                                </TableCell>
                                <TableCell id='linkedInIcon' className='contactIcon'>
                                    <Mail />
                                </TableCell>
                                <TableCell id='linkedInTxt' className='contactText'>
                                    <a href='mailto:mbmedhurst@gmail.com'>
                                        mbmedhurst@gmail.com
                                    </a>
                                </TableCell>
                            </TableRow>
                            <TableRow id='gitHub'>
                                <TableCell id='gitLabel' className='contactLabel'>
                                    GitHub:
                                </TableCell>
                                <TableCell id='gitIcon' className='contactIcon'>
                                    <img src='./images/git3.jpg' alt='git icon'></img>
                                </TableCell>
                                <TableCell id='gitTxt' className='contactText'>
                                    <a href='https://github.com/mbmedhurst'>
                                        mbmedhurst
                                    </a>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </>
    )
}

export default ContactPaper