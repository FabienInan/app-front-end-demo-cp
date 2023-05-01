
import React, { Suspense } from 'react';

import { AppRoutes } from '@lica-tech/front-end-core/AppRoutes';
import Loader from '@lica-tech/front-end-core/components/Loading/Loader';
import { BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={<Loader />}>
        <AppRoutes/>
      </Suspense>
    </Router>
  );
};

export default App;

