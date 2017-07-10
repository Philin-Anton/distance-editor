import { render } from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App/index.tsx';
import store from './store/index.ts';

const renderApp = (Component:any) => {
  render(
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Component />
        </AppContainer>
      </Router>
    </Provider>,
    document.getElementById('DE-react-root')
  );
};

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App/index.tsx', () => renderApp(App));
}

// render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );