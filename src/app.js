import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'pages';
import { GlobalStyle } from 'ui';
import { Layout } from 'containers';
import { Seo } from 'utils';
import { Provider } from 'react-redux';
import store from 'store';

const theme = {
  colors: {
    primary: ['#3b55e4', '#354dcd', '#2f44b6'],
    secondary: ['#454545', '#3e3e3e', '#373737'],
    background: '#FEFFFE',
    text: '#A4A4A5',
    white: '#fff',
    black: '#454445',
    gray: '#F1F3F7',
    darkGray: '#E2E9F0',
  },
  fontFamily: "'Roboto', sans-serif;",
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Seo />
        <Router>
          <Layout>
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

render(<App />, document.getElementById('app'));
