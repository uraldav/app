/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInPage from 'containers/SignInPage';
import AppLayout from './AppLayout';

export default function App() {
  return (
    <Switch>
      <Route exact path="/signin" component={SignInPage} />
      <AppLayout />
    </Switch>
  );
}
