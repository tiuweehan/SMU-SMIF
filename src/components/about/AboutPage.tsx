import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core/';
import BackgroundPicture from 'assets/images/About-Us-Cover-Page-v2.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    parent: {
      position: 'relative'
    },
    aspectRatio: {
      width: '100%',
      height: 'auto'
    },
    content: {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0
    }
  })
);

const AboutPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.parent}>
        <img className={classes.aspectRatio} src={BackgroundPicture} />
        <div className={classes.content}>Content</div>
      </div>
    </div>
  );
};

export default AboutPage;
