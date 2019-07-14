import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Drawer, Grid, IconButton, List, Divider } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { DisplayLinkData } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 250,
      backgroundColor: '#1A2B57'
    },
    clearIcon: {
      color: '#c0c6d4'
    },
    link: {
      textDecoration: 'none'
    },
    linkContainer: {
      'color': '#c0c6d4',
      '&:hover': {
        color: 'white'
      },
      'fontWeight': 600,
      'fontSize': 13,
      'height': '40px',
      'padding': '10px 20px 10px 20px'
    }
  })
);

interface Props {
  isOpen: boolean;
  linksData: DisplayLinkData[];
}

const SharedDrawer: React.FC<Props> = ({ isOpen, linksData }) => {
  const classes = useStyles();

  return (
    <Drawer classes={{ paper: classes.drawer }} anchor='right' open={isOpen}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify='flex-end'>
            <IconButton>
              <ClearIcon className={classes.clearIcon} />
            </IconButton>
          </Grid>
        </Grid>
        {linksData.map((linkData, index) => (
          <Grid item key={index} xs={12}>
            <Divider />
            <Link to={linkData.link} className={classes.link}>
              <Grid container className={classes.linkContainer}>
                {linkData.title}
              </Grid>
            </Link>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default SharedDrawer;
