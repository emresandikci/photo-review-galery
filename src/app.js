import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'pages';
import { GlobalStyle } from 'ui';
import { Main } from 'layouts';
import { Seo, theme } from 'utils';
import { Provider } from 'react-redux';
import globalStore from 'store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={globalStore.store}>
      <PersistGate loading={null} persistor={globalStore.persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Seo />
          <Router>
            <Main>
              <Switch>
                <Route path="/" component={Home} exact />
              </Switch>
            </Main>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

render(<App />, document.getElementById('app'));
