import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Menu } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './layoutdesign.css'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }, 
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  profileButton: {
    marginRight: theme.spacing(2),
    marginLeft:'auto',
  },
  hide: {
    display: 'none',
  },
  
  logo: {
    maxWidth: 40,
    marginRight: '10px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


export default function TopNav() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const logout = () => {
    localStorage.clear();
    window.location.reload(false)
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
          
          <img className="logo-image" className={classes.logo} src="https://www.humanrightslogo.net/sites/default/files/HRLogoCMYKsmallRGB.png" />
          <Typography variant="h6" style={{fontFamily: 'Alegreya'}} noWrap>
            Admin Profile
          </Typography>
          
          <div className={classes.profileButton} >
              <IconButton  
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle  />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={opens}
                onClose={handleClose}
              >
              <MenuItem onClick={handleClose}> <Link to="/user/profile" style={{ textDecoration: 'none'}}>
             My Profile </Link> </MenuItem>
              <MenuItem onClick={handleClose}> <Link to="/user/dashboard" style={{ textDecoration: 'none'}}>
             Dashboard</Link> </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>

        </Toolbar>
      </AppBar>

      
    </div>
  );
  
}