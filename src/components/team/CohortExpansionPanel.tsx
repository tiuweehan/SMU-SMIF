import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DetailedProfileCard from './DetailedProfileCard';
import LineBreak from 'components/utils/LineBreak';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expansionPanel: {
      width: '100%',
    },
    expansionPanelSummaryHeader: {
      color: '#888',
      fontSize: '1.25rem',
      fontWeight: 300
    },
    expansionPanelDetails: {
      backgroundColor: '#eee',
    },
    cardContainer: {
      marginBottom: '15px'
    }
  })
);

const CohortExpansionPanel: React.FC = () => {
  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.expansionPanel} defaultExpanded={true}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Box className={classes.expansionPanelSummaryHeader}>
          2019 - 2020
        </Box>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expansionPanelDetails}>
        <Grid container>
          <Grid item xs={12}>
            <LineBreak height={'10px'}/>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} md={6} lg={4} className={classes.cardContainer}>
                <Grid container justify='center'>
                  <DetailedProfileCard
                    name={'Zaf Tiu Wee Yong'}
                    role={'President'}
                    displayPictureUrl={
                      'https://media.licdn.com/dms/image/' +
                      'C5103AQG4O_eLw4TRaA/profile-displayphoto' +
                      '-shrink_800_800/0?e=1568246400&v=beta&' +
                      't=69ulx23MTA910e35olkbyFR3RRLJIBzJaENsGVMJJkg'
                    }
                    linkedinUrl={'https://www.linkedin.com/in/zaf-tiu'}
                    description={
                      'Cipto was a member of SMU-SMIF during his time at SMU. ' +
                      'He is currently a Director at Druk Asia Private ' +
                      'Limited, a travel and tour agency. Cipto previously worked as an equity analyst ' +
                      'at Aberdeen Asset Management, and as an analyst at JPMorgan.'
                    }
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={4} className={classes.cardContainer}>
                <Grid container justify='center'>
                  <DetailedProfileCard
                    name={'Zaf Tiu Wee Yong'}
                    role={'President'}
                    displayPictureUrl={
                      'https://media.licdn.com/dms/image/' +
                      'C5103AQG4O_eLw4TRaA/profile-displayphoto' +
                      '-shrink_800_800/0?e=1568246400&v=beta&' +
                      't=69ulx23MTA910e35olkbyFR3RRLJIBzJaENsGVMJJkg'
                    }
                    linkedinUrl={'https://www.linkedin.com/in/zaf-tiu'}
                    description={
                      'Cipto was a member of SMU-SMIF during his time at SMU. ' +
                      'He is currently a Director at Druk Asia Private ' +
                      'Limited, a travel and tour agency. Cipto previously worked as an equity analyst ' +
                      'at Aberdeen Asset Management, and as an analyst at JPMorgan.'
                    }
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={4} className={classes.cardContainer}>
                <Grid container justify='center'>
                  <DetailedProfileCard
                    name={'Zaf Tiu Wee Yong'}
                    role={'President'}
                    displayPictureUrl={
                      'https://media.licdn.com/dms/image/' +
                      'C5103AQG4O_eLw4TRaA/profile-displayphoto' +
                      '-shrink_800_800/0?e=1568246400&v=beta&' +
                      't=69ulx23MTA910e35olkbyFR3RRLJIBzJaENsGVMJJkg'
                    }
                    linkedinUrl={'https://www.linkedin.com/in/zaf-tiu'}
                    description={
                      'Cipto was a member of SMU-SMIF during his time at SMU. ' +
                      'He is currently a Director at Druk Asia Private ' +
                      'Limited, a travel and tour agency. Cipto previously worked as an equity analyst ' +
                      'at Aberdeen Asset Management, and as an analyst at JPMorgan.'
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default CohortExpansionPanel;
