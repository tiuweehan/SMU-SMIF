import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { Box, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DetailedProfileCard from './DetailedProfileCard';
import LineBreak from 'components/utils/LineBreak';
import { CohortData } from './types';

// tslint:disable-next-line
const { Fade } = require('react-reveal');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expansionPanel: {
      'width': '100%',
      'border': '1px solid rgba(0, 0, 0, .125)',
      'boxShadow': 'none',
      '&:not(:last-child)': {
        borderBottom: 0
      },
      '&:before': {
        display: 'none'
      },
      '&$expanded': {
        margin: 'auto'
      }
    },
    expanded: {
      margin: '0 auto'
    },
    expansionPanelSummaryHeader: {
      color: '#888',
      fontSize: '1.25rem',
      fontWeight: 300
    },
    expansionPanelDetails: {
      backgroundColor: '#eee'
    },
    cardContainer: {
      marginBottom: '15px'
    }
  })
);

interface Props {
  cohortData: CohortData;
  defaultExpanded: boolean;
  isExpanded: boolean;
  setIsExpanded: (shouldExpand: boolean) => void;
}

const CohortExpansionPanel: React.FC<Props> = (props) => {
  const { cohortData, defaultExpanded } = props;
  const { header, profiles } = cohortData;
  const classes = useStyles();

  return (
    <ExpansionPanel
      classes={{ expanded: classes.expanded }}
      className={classes.expansionPanel}
      defaultExpanded={defaultExpanded}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Box className={classes.expansionPanelSummaryHeader}>{header}</Box>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expansionPanelDetails}>
        <Grid container>
          <Grid item xs={12}>
            <LineBreak height={'10px'} />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              {profiles.map((profileData, index) => (
                <Grid item key={index} xs={12} md={6} lg={4} className={classes.cardContainer}>
                  <Grid container justify='center'>
                    <Fade>
                      <DetailedProfileCard profileData={profileData} />
                    </Fade>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default CohortExpansionPanel;
