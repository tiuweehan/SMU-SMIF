import * as React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Box, Card, CardActions, CardContent, Divider, Grid, IconButton } from '@material-ui/core';
import LineBreak from 'components/utils/LineBreak';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: 500,
      width: 320
    },
    cardContent: {
      width: '100%',
      height: '85%'
    },
    displayPicture: {
      width: 125,
      height: 125
    },
    displayName: {
      fontSize: '1rem',
      fontWeight: 'bold'
    },
    displayRole: {
      color: '#888',
      fontSize: '1.25rem',
      fontWeight: 300
    },
    displayDescription: {
      marginLeft: '5%',
      marginRight: '5%',
      textAlign: 'center',
      font: 'calibri',
      fontSize: 12,
      fontFamily: '"Arial", Arial, Tahoma, sans-serif',
      lineHeight: 2
    },
    icon: {
      height: '30px',
      width: '30px',
      marginLeft: '7%',
      marginRight: '7%'
    }
  })
);

export interface Props {
  displayPictureUrl: string;
  name: string;
  role: string;
  linkedinUrl: string;
  description: string;
}

const ProfileCard: React.FC<Props> = ({ displayPictureUrl, name, role, linkedinUrl, description }) => {
  const classes = useStyles({});

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <LineBreak height={'10px'} />
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center' alignContent='center'>
              <Avatar className={classes.displayPicture}>
                <img className={classes.displayPicture} src={displayPictureUrl} alt={'Profile Picture'} />
              </Avatar>
            </Grid>
          </Grid>
          <LineBreak height={'15px'} />
          <Grid item xs={12}>
            <Grid container justify='center' alignContent='center'>
              <Box className={classes.displayName}>{name}</Box>
            </Grid>
          </Grid>
          <LineBreak height={'10px'} />
          <Grid item xs={12}>
            <Grid container justify='center' alignContent='center'>
              <Box className={classes.displayRole}>{role}</Box>
            </Grid>
          </Grid>
          <LineBreak height={'10px'} />
          <Grid item xs={12}>
            <Grid container justify='center' alignContent='center'>
              <Box className={classes.displayDescription}>{description}</Box>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid item xs={12} className={classes.icon}>
          <Divider />
          <Grid container justify='center' alignContent='center'>
            <Link to={linkedinUrl}>
              <IconButton>
                <img
                  className={classes.icon}
                  src={`${process.env.PUBLIC_URL}/assets/images/team/LinkedInIcon.svg`}
                  alt={'Linkedin Icon'}
                />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
