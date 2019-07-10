import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// tslint:disable-next-line
const { Parallax, Background } = require('react-parallax');

interface Props {
  deep: {
    backgroundImage: string;
    backgroundHeight: string;
    backgroundVerticalScale: string;
    parallaxStrength: number;
    title: string;
  };
  middle: {
    bufferColor: string;
    verticalTranslate: string;
    paddingBottom: string;
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    deepestLayer: {
      zIndex: 1
    },
    backgroundImage: ({ deep }: Props) => ({
      position: 'relative',
      top: deep.backgroundVerticalScale,
      width: `${window.innerWidth}px`
    }),
    backgroundHeight: ({ deep }: Props) => ({
      height: deep.backgroundHeight
    }),
    title: {
      color: '#FFF',
      fontSize: '38px',
      fontWeight: 700,
      fontFamily: 'Arial, Arial, Tahoma, sans-serif'
    },
    middleLayer: ({ middle }: Props) => ({
      backgroundColor: middle.bufferColor,
      paddingBottom: middle.paddingBottom,
      zIndex: 2
    }),
    contentContainer: ({ middle }: Props) => ({
      backgroundColor: 'red',
      position: 'relative',
      width: '84%',
      left: '8%',
      right: '8%',
      top: middle.verticalTranslate
    })
  })
);

const SharedLayout: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Grid className={classes.root}>
      {/* Deepest Layer - Background Image */}
      <Grid className={classes.deepestLayer}>
        <Parallax strength={props.deep.parallaxStrength}>
          <Background>
            <img src={props.deep.backgroundImage} className={classes.backgroundImage} />
          </Background>
          <Grid container className={classes.backgroundHeight} justify='center' alignItems='center'>
            <Grid item className={classes.title}>
              {props.deep.title}
            </Grid>
          </Grid>
        </Parallax>
      </Grid>
      {/* Middle Layer - Buffer Layer */}
      <Grid className={classes.middleLayer}>
        <Grid className={classes.contentContainer}>{props.children}</Grid>
      </Grid>
    </Grid>
  );
};

export default SharedLayout;
