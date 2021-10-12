import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils';
import { Provider } from 'react-redux';
import globalStore from 'store';
import { PersistGate } from 'redux-persist/integration/react';

const App = ({ children }) => {
  return (
    <Provider store={globalStore.store}>
      <PersistGate loading={null} persistor={globalStore.persistor}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: App, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
