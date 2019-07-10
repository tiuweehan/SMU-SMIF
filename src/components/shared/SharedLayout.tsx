import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// tslint:disable-next-line
const { Parallax, Background } = require('react-parallax');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundImage: {
      position: 'relative',
      top: '370px',
      width: `${window.innerWidth}px`
    }
  })
);

interface Props {
  backgroundImage: string;
}

const SharedLayout: React.FC<Props> = ({ backgroundImage }) => {
  const classes = useStyles();

  return (
    <Grid>
      <Parallax strength={800}>
        <Background>
          <img src={backgroundImage} className={classes.backgroundImage} />
        </Background>
        <div style={{ height: '500px' }} />
      </Parallax>
    </Grid>
  );
};

export default SharedLayout;
