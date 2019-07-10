import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SharedNavbar from './SharedNavbar';
import SharedFooter from './SharedFooter';

type Props = RouteComponentProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buffer: {
      height: '60px'
    }
  })
);

const SharedMain: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SharedNavbar />
      <div className={classes.buffer} />
      {props.children}
      <SharedFooter />
    </React.Fragment>
  );
};

export default withRouter(SharedMain);
