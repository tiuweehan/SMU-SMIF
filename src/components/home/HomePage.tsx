import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Fade, Grid, IconButton } from '@material-ui/core/';
import LineBreak from 'components/utils/LineBreak';
import FilledButtonIcon from '@material-ui/icons/Lens';
import EmptyButtonIcon from '@material-ui/icons/PanoramaFishEye';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    contentbox: {
      background: 'repeating-linear-gradient(45deg,#FFFFFF,#EEEEEE 5px,#FFFFFF 5px,#EEEEEE 10px);',
      height: '100%',
      width: '100%',
      padding: '10%'
    },
    textbox: {
      height: '85%',
      width: '100%'
    },
    miniHeader: {
      color: 'rgb(21, 53, 135)'
    },
    description: {
      color: 'rgb(21, 53, 135)',
      fontSize: 31,
      fontWeight: 700,
      textAlign: 'center'
    },
    stepper: {
      height: '20px'
    },
    stepperIconButton: {
      height: '20px',
      width: '20px',
      position: 'relative',
      top: '30px'
    },
    stepperIcon: {
      color: 'rgb(184, 151, 136)',
      position: 'relative',
      top: '-30px',
      height: '20px',
      width: '20px',
      marginTop: '20px'
    },
    picture: {
      'height': '100%',
      'width': '100%',
      '&:entering': {
        animationDuration: '4s'
      }
    }
  })
);

interface Slide {
  description: string;
  picture: string;
}

const HomePage: React.FC = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [slidesData, setSlidesData] = React.useState<Slide[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState<number>(0);
  const [slideInterval, setSlideInterval] = React.useState<NodeJS.Timeout>();

  React.useEffect(() => {
    setIsLoading(true);
    fetch('/assets/data/home/slides.json')
      .then((response) => response.json())
      .then((data) => setSlidesData(data))
      .then(() => {
        setSlideInterval(
          setInterval(() => {
            setCurrentSlideIndex((slideIndex) => (slideIndex + 1) % 3);
          }, 5000)
        );
        setIsLoading(false);
        return () => clearInterval(slideInterval!);
      });
  }, []);

  const handleSlideChange = (index: number) => {
    clearInterval(slideInterval!);
    setCurrentSlideIndex(index);
    setSlideInterval(
      setInterval(() => {
        setCurrentSlideIndex((slideIndex) => (slideIndex + 1) % 3);
      }, 5000)
    );
  };

  if (isLoading) {
    return <div />;
  }

  return (
    <>
      {slidesData.map(({ description, picture }, index) => (
        <Fade key={index} in={index === currentSlideIndex} timeout={2000}>
          <Grid
            container
            className={classes.root}
            style={{
              position: index === currentSlideIndex ? 'relative' : 'absolute',
              top: index === currentSlideIndex ? '0px' : '55px',
              left: 0
            }}
          >
            <Grid item xs={12} md={3}>
              <Grid container className={classes.contentbox}>
                <Grid container className={classes.textbox} justify='center' alignContent='center'>
                  <Grid className={classes.miniHeader}>SMU SMIF</Grid>
                  <LineBreak height={'30px'} />
                  <Grid className={classes.description}>{description}</Grid>
                </Grid>
                <Grid container className={classes.stepper} justify='center' alignContent='center'>
                  {slidesData.map((slideData, slideIndex) => (
                    <IconButton
                      key={slideIndex}
                      className={classes.stepperIconButton}
                      onClick={() => handleSlideChange(slideIndex)}
                    >
                      {slideIndex === currentSlideIndex ? (
                        <FilledButtonIcon className={classes.stepperIcon} />
                      ) : (
                        <EmptyButtonIcon className={classes.stepperIcon} />
                      )}
                    </IconButton>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container>
                <img className={classes.picture} src={picture} />
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      ))}
    </>
  );
};

export default HomePage;
