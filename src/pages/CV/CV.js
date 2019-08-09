import React from 'react'
import './cv.css'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const CV = _ => {
    return (
        <>
            <Grid container fixed>
                <Grid item id='sidebar' sm={0} md={3}></Grid>
                <Grid item id='resCont' sm={12} md={9}>
                    <div className='header'>Résumé</div>
                    <Typography component="p" id='download' style={{ marginTop: '10px' }}>
                        <a id='downloadLink' target="_blank" href="./images/Medhurst_Resume.pdf" download>Download PDF</a>
                    </Typography>
                    <Grid item id='summaryHead' sm={12}>
                        Summary
                </Grid>
                    <Grid item id='summary' sm={12}>
                        A committed, enthusiastic and goal-oriented Full Stack Web Developer. Recent coding bootcamp graduate specializing in HTML, CSS, JavaScript and React.js. Extensive experience working with business systems in various roles, including technical support, training, business analysis, writing user guides, usability and user acceptance testing. Highly skilled in managing multiple projects with changing priorities and schedules. A methodical approach to work with excellent interpersonal communication skills that assist in achieving business objectives.
                </Grid>
                    <Grid item id='techHead' sm={12}>
                        Technical Skills
                </Grid>
                    <Grid item id='tech' sm={12}>
                        HTML5, CSS3, JavaScript, React.js, MySQL, MongoDB, Node, Materialize, Material-UI, Moment.js., Firebase, GitHub, Postman, Jira, TFS
                </Grid>
                    <Grid item id='projectsHead' sm={12}>
                        Projects
                </Grid>
                    <Grid item id='projects' sm={12}>
                        #Adulting | <a className='projectLink' target='_blank' href='https://github.com/mbmedhurst/Project3'>GitHub</a> | <a className='projectLink' target='_blank' href='https://adultingapp.herokuapp.com'>Deployed</a>
                    </Grid>
                    <Grid item id='adultingDesc' sm={12}>
                        <p className='headline'>An app for families to manage household chores</p>
                        <ul>
                            <li>Create chores and assign to family members, edit, mark as complete, delete if required</li>
                            <li>Dashboard compares and displays progress for all family members</li>
                            <li>Profile page displays stats for a single family member</li>
                            <li>React.js (context & hooks), MongoDB, Passport, Material-UI, Chart.js, Random Color</li>
                        </ul>
                    </Grid>
                    <Grid item id='projects' sm={12}>
                        Google Books Search | <a className='projectLink' target='_blank' href='https://github.com/mbmedhurst/BooksSearch'>GitHub</a> | <a className='projectLink' target='_blank' href='https://googlebooksmbm.herokuapp.com'>Deployed</a>
                    </Grid>
                    <Grid item id='googleDesc' sm={12}>
                        <p className='headline'>An app to search for books on Google Books</p>
                        <ul>
                            <li>Search for books, view results, save to database, delete from database</li>
                            <li>React.js, MongoDB, Google Books API, Material-UI</li>
                        </ul>
                    </Grid>
                    <Grid item id='projects' sm={12}>
                        The Clicky Game | <a className='projectLink' target='_blank' href='https://github.com/mbmedhurst/ClickyGame'>GitHub</a> | <a className='projectLink' target='_blank' href='https://clickygamembm.herokuapp.com/'>Deployed</a>
                    </Grid>
                    <Grid item id='clickyDesc' sm={12}>
                        <p className='headline'>A memory game - try not to click on the same image twice</p>
                        <ul>
                            <li>Images shuffle after each click</li>
                            <li>Top Score is remembered from game to game</li>
                            <li>React.js, Material-UI, Shuffle-Array</li>
                        </ul>
                    </Grid>

                    <Grid item id='expHead' sm={12}>
                        Experience
                    </Grid>
                    <Grid item id='jobHead' sm={12}>
                        <strong>Software Quality Assurance Consultant</strong> – <span style={{ fontStyle: 'italic' }}>TenOTwo LLC – Tustin, CA</span>
                        <p className='dates'>2014 - present</p>
                        <p classNam></p>
                    </Grid>
                    <Grid item id='jobDesc' sm={12}>
                        Freelance Quality Assurance, Usability and User Acceptance testing services for SaaS systems, websites and mobile apps. Create customized test scripts, evaluate apps for bugs and usability problems, evaluate text for voice, style consistency and professionalism. Create training material and user documentation.
                    <p className='keyAcc' style={{ fontStyle: 'italic' }}>Key Accomplishments:</p>
                        <ul className='bullets'>
                            <li>Attended Nielsen Norman Group’s Usability Week seminars: Analytics & User Experience, Human Mind & Usability, Measuring User Experience, Usability Testing & Usability Basic Training</li>
                            <li>Took a number of Business Analysis courses through UCI’s Department of Continuing Education</li>
                        </ul>
                    </Grid>
                    <Grid item id='jobHead' sm={12}>
                        <strong>Business Validation & Training Manager</strong> – <span style={{ fontStyle: 'italic' }}>Achilles Group Ltd. – Oxford, UK</span>
                        <p className='dates'>2010 - 2016</p>
                        <p classNam></p>
                    </Grid>
                    <Grid item id='jobDesc' sm={12}>
                        Managed the Business Validation team, which was responsible for planning and facilitating user acceptance testing of all new system enhancements with both internal and external customers. Liaised with product managers and developers to understand new functionality, wrote test scripts, set up test data, recruited participants from all parts of the business, facilitated test execution, collected and evaluated feedback, monitored progress of issue resolution, and reported results to stakeholders. Supervised the training program for all internal staff and VIP external customers on new and existing system functionality. This included in-person training, user-guides and e-learning material.
                    <p className='keyAcc' style={{ fontStyle: 'italic' }}>Key Accomplishments:</p>
                        <ul className='bullets'>
                            <li>Introduced a ‘voice’ style guide, which established a company-wide standard for all system text</li>
                            <li>Known for our high standards and attention to detail, the team was frequently asked to write test cases for IT as well as participate in early rounds of system testing and defect re-testing</li>
                        </ul>
                    </Grid>
                    <Grid item id='jobHead' sm={12}>
                        <strong>Application Manager, Maxim</strong> – <span style={{ fontStyle: 'italic' }}>Elsevier – Oxford, UK</span>
                        <p className='dates'>2003 - 2010</p>
                        <p classNam></p>
                    </Grid>
                    <Grid item id='jobDesc' sm={12}>
                        Managed a $200 million / year Commercial Sales billing system (Maxim). Provided daily technical support to 150 users worldwide, conducted scheduled and ad-hoc user training sessions at multiple worldwide locations, planned and facilitated annual user meetings and enhancement brainstorming sessions, created comprehensive system user guides, designed and maintained Maxim web site on company intranet.
                    <p className='keyAcc' style={{ fontStyle: 'italic' }}>Key Accomplishments:</p>
                        <ul className='bullets'>
                            <li>Worked closely with users in multiple departments and third party vendors to design and implement key system enhancements, resulting in greatly increased system functionality, more robust performance, greater accuracy in reporting, and compliance in at least three corporate regulatory obligations (Sarbanes-Oxley, PCI DSS, Tax)</li>
                            <li>As Sarbanes-Oxley (Sox) Process Owner for Elsevier's worldwide Commercial Sales business, analyzed existing procedures within eleven user groups and designed new, customized workflows to incorporate Sox controls</li>
                            <li>Oversaw and facilitated internal and external Sox audits with consistently excellent results</li>
                        </ul>
                    </Grid>
                    <Grid item id='edHead' sm={12}>
                        Education
                    </Grid>
                    <Grid item id='edDetails' sm={12}>
                        <p><strong>University of California, Irvine</strong> – Full Stack Web Development Bootcamp</p>
                        <p><strong>Loyola Marymount University</strong> – Master of Arts, English</p>
                        <p><strong>Loyola Marymount University</strong> – Bachelor of Arts, English</p>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CV