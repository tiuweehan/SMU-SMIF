import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton, Box } from '@material-ui/core/';
import logo from 'assets/images/SMIF-Logo-v4.png';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: 'auto'
    },
    logo: {
      marginLeft: 0
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    button: {
      marginRight: 0,
      textTransform: 'none'
    },
    link: {
      textDecoration: 'none',
      color: 'inherit'
    }
  })
);

const SharedNavbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          {/* <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton> */}
          <img src={logo} height='45' className={classes.logo} />
          <div className={classes.title} />
          <Link className={classes.link} to='/'>
            <Button color='inherit' className={classes.button}>
              Home
            </Button>
          </Link>
          <Link className={classes.link} to='/about'>
            <Button color='inherit' className={classes.button}>
              About
            </Button>
          </Link>
          <Link className={classes.link} to='/investments'>
            <Button color='inherit' className={classes.button}>
              Investments
            </Button>
          </Link>
          <Link className={classes.link} to='/achievements'>
            <Button color='inherit' className={classes.button}>
              Achievements
            </Button>
          </Link>
          <Link className={classes.link} to='/contact'>
            <Button color='inherit' className={classes.button}>
              Contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SharedNavbar;
