import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';
import viewedImagesReducer from './viewedImagesReducer';

export default combineReducers({
  images: imagesReducer,
  viewedImages: viewedImagesReducer,
});
