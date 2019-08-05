import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Home from '@material-ui/icons/Home'
import Work from '@material-ui/icons/Work'
import Person from '@material-ui/icons/Person'
import Mail from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#003882',
    borderBottom: '2px solid white',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  icon: {
    // backgroundColor: '#003882',
  },
  link: {
    textDecoration: 'none',
    color: '#003882',
  }
}))

const TopNav = _ => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Marianna Medhurst
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className={classes.link} to='/'>
            <ListItem button key='home'>
              <ListItemIcon style={{color: '#003882'}}><Home /></ListItemIcon>
              <ListItemText onClick={handleDrawerClose} primary='Home' />
            </ListItem>
          </Link>
          <Link className={classes.link} to='/about'>
            <ListItem button key='about'>
              <ListItemIcon style={{color: '#003882'}}><Person /></ListItemIcon>
              <ListItemText onClick={handleDrawerClose} primary='About Me' />
            </ListItem>
          </Link>
          <Link className={classes.link} to='/portfolio'>
            <ListItem button key='portfolio'>
              <ListItemIcon style={{color: '#003882'}}><Work /></ListItemIcon>
              <ListItemText onClick={handleDrawerClose} primary='Portfolio' />
            </ListItem>
          </Link>
          <Link className={classes.link} to='/contact'>
            <ListItem button key='contact'>
              <ListItemIcon style={{color: '#003882'}}><Mail /></ListItemIcon>
              <ListItemText onClick={handleDrawerClose} primary='Contact' />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}


export default TopNav