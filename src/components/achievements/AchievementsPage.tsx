import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SharedLayout from 'components/shared/SharedLayout';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@material-ui/icons/Work';

// tslint:disable-next-line
const { VerticalTimeline, VerticalTimelineElement } = require('react-vertical-timeline-component');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timeline: {
      backgroundColor: 'rgb(235, 235, 235)',
      padding: '30px 30px 30px 30px'
    },
    picture: {
      width: '100%'
    }
  })
);

export interface TimelineData {
  header: string;
  subheader: string;
  date: string;
  picture: string;
  description: string;
  icon: string;
}

const AchievementsPage: React.FC = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const [timelineData, setTimelineData] = React.useState<TimelineData[]>([]);
  const classes = useStyles();

  React.useEffect(() => {
    fetch('/assets/data/achievements/achievements.json')
      .then((response) => response.json())
      .then((response) => setTimelineData(response));
  }, []);

  return (
    <SharedLayout
      deep={{
        backgroundImage: `${process.env.PUBLIC_URL}/assets/images/achievements/Achievements.jpg`,
        backgroundHeight: '490px',
        backgroundVerticalScale: '350px',
        parallaxStrength: 800,
        title: 'Achievements'
      }}
      middle={{
        bufferColor: '#F2F3F5',
        verticalTranslate: '-40px',
        paddingBottom: '10px'
      }}
    >
      <Grid className={classes.timeline}>
        <VerticalTimeline>
          {timelineData.map((event, index) => {
            const { header, subheader, picture, date, description } = event;
            return (
              <VerticalTimelineElement
                key={index}
                className='vertical-timeline-element--work'
                date={date}
                iconStyle={{ background: '#153587', color: '#fff' }}
                icon={<WorkIcon />}
              >
                <h3 className='vertical-timeline-element-title'>{header}</h3>
                <h4 className='vertical-timeline-element-subtitle'>{subheader}</h4>
                {picture !== '' && (
                  <>
                    <br />
                    <img className={classes.picture} src={picture} />
                  </>
                )}
                <p>{description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Grid>
    </SharedLayout>
  );
};

export default AchievementsPage;
