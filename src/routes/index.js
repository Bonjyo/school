import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CoreLayout from '../layouts/CoreLayout';
import AccountRoute from './Account';
import AlertsRoute from './Alerts';
import FinanceRoute from './Finance';
import Home from './Home';
import LoginRoute from './Login';
import NotFoundRoute from './NotFound';
import NotificationsRoute from './Notifications';
import ProfileRoute from './Profile';
import ProjectsRoute from './Projects';
import SignupRoute from './Signup';

export default function createRoutes(store) {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={() => <Home.component />} />
        {/* Build Route components from routeSettings */
        [
          AccountRoute,
          ProjectsRoute,
          SignupRoute,
          LoginRoute,
          ProfileRoute,
          FinanceRoute,
          AlertsRoute,
          NotificationsRoute,
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}
        <Route component={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  );
}
