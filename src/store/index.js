import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

const isProduction = process.env.NODE_ENV === 'production';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const reduxDevtool =
  !isProduction && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

let store = createStore(persistedReducer, compose(applyMiddleware(thunk), reduxDevtool));
let persistor = persistStore(store);

export default { store, persistor };
