import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton, Box, useMediaQuery } from '@material-ui/core/';
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
      color: 'white'
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
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.root}>
      <div style={{ height: '50px', width: '100%' }} />
      <AppBar position='fixed'>
        <Toolbar>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/shared/SMIF-Logo.png`}
            height='45'
            className={classes.logo}
          />
          <div className={classes.title} />
          {md ? (
            <React.Fragment>
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
            </React.Fragment>
          ) : (
            <IconButton className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SharedNavbar;
