import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from 'logic/constants';

const Main = lazy(() => import('pages/Main'));

const Routes: React.SFC = () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route path={ROUTES.MAIN}>
        <Main />
      </Route>
    </Switch>
  </Suspense>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
