import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Box, Card, CardContent, Divider, Grid, IconButton } from '@material-ui/core';
import LineBreak from 'components/utils/LineBreak';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: 300,
      width: 220
    },
    cardContent: {
      width: '100%'
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
    icon: {
      height: '25px',
      width: '25px'
    }
  })
);

export interface Props {
  displayPictureUrl: string;
  name: string;
  role: string;
  linkedinUrl: string;
}

const ProfileCard: React.FC<Props> = ({ displayPictureUrl, name, role, linkedinUrl }) => {
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
          &nbsp;
          <Grid item xs={12}>
            <Grid container justify='center' alignContent='center'>
              <Box className={classes.displayName}>{name}</Box>
            </Grid>
          </Grid>
          <LineBreak height={'5px'} />
          <Grid item xs={12}>
            <Grid container justify='center' alignContent='center'>
              <Box className={classes.displayRole}>{role}</Box>
            </Grid>
          </Grid>
          <LineBreak height={'10px'} />
          <Grid item xs={12} className={classes.icon}>
            <Divider />
            <Grid container justify='center' alignContent='center'>
              <a href={linkedinUrl}>
                <IconButton>
                  <img className={classes.icon} src={`${process.env.PUBLIC_URL}/assets/images/team/LinkedInIcon.svg`} />
                </IconButton>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
