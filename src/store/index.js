import { createStore } from 'redux';
import reducers from './reducers/index';

const isProduction = process.env.NODE_ENV === 'production';
const store = createStore(
  reducers,
  !isProduction && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
