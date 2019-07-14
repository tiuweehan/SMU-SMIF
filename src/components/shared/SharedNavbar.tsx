import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton, Box, useMediaQuery } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import SharedDrawer from './SharedDrawer';
import { DisplayLinkData } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: 'auto'
    },
    buffer: {
      height: '55px',
      width: '100%'
    },
    appbar: {
      backgroundColor: '#07163f'
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
      'marginRight': 0,
      'textTransform': 'none',
      'color': '#c0c6d4',
      '&:hover': {
        color: 'white'
      }
    },
    selectedButton: {
      marginRight: 0,
      textTransform: 'none',
      color: 'white'
    },
    link: {
      textDecoration: 'none',
      color: 'inherit'
    }
  })
);

type Props = RouteComponentProps;

const SharedNavbar: React.FC<Props> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const [linksData, setLinksData] = React.useState<DisplayLinkData[]>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetch('/assets/data/shared/shared_drawer.json')
      .then((response) => response.json())
      .then((data) => setLinksData(data));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.buffer} />
      <AppBar position='fixed' className={classes.appbar}>
        <Toolbar>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/shared/SMIF-Logo.png`}
            height='45'
            className={classes.logo}
          />
          <div className={classes.title} />
          {md ? (
            linksData.map((linkData, index) => (
              <Link key={index} className={classes.link} to={linkData.link}>
                <Button className={props.location.pathname === linkData.link ? classes.selectedButton : classes.button}>
                  {linkData.title}
                </Button>
              </Link>
            ))
          ) : (
            <IconButton className={classes.menuButton} onClick={() => setIsOpen(!isOpen)}>
              <SharedDrawer isOpen={isOpen} linksData={linksData} />
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(SharedNavbar);
