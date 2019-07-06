import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import SharedNavbar from './SharedNavbar';

type Props = RouteComponentProps;

const SharedMain: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
    <SharedNavbar />
      {props.children}
    </React.Fragment>
  );
}

export default withRouter(SharedMain);
