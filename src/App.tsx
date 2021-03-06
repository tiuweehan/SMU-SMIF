import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import SharedMain from 'components/shared/SharedMain';
import HomePage from 'components/home/HomePage';
import AboutPage from 'components/about/AboutPage';
import TeamPage from 'components/team/TeamPage';
import InvestmentsPage from 'components/investments/InvestmentsPage';
import AchievementsPage from 'components/achievements/AchievementsPage';
import ContactPage from 'components/contact/ContactPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#153587'
    }
  }
});

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <SharedMain>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/team' component={TeamPage} />
              <Route exact path='/investments' component={InvestmentsPage} />
              <Route exact path='/achievements' component={AchievementsPage} />
              <Route exact path='/contact' component={ContactPage} />
              <Route path='/' component={() => <Redirect to={'/'} />} />
            </Switch>
          </SharedMain>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
