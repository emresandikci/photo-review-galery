import {
  GET_VIEWED_IMAGES_STARTED,
  GET_VIEWED_IMAGES_SUCCEDED,
  SET_VIEWED_IMAGES_STARTED,
  SET_VIEWED_IMAGES_SUCCEDED,
  DELETE_VIEWED_IMAGES_STARTED,
  DELETE_VIEWED_IMAGES_SUCCEDED,
} from 'store/types/viewedImages';
import { getRandomImage } from 'store/actions/imagesActions';

// const API_URL = process.env.API_URL;

export const approveImage = (image) => (dispatch, getState) => {
  const { viewedImages } = getState();

  const isAlreadyViewed =
    viewedImages?.data?.length > 0 &&
    viewedImages?.data?.some((item) => item.id === image.id && item.isApproved);

  if (isAlreadyViewed) return dispatch(getRandomImage());

  dispatch({
    type: SET_VIEWED_IMAGES_STARTED,
  });

  dispatch({
    type: SET_VIEWED_IMAGES_SUCCEDED,
    payload: { ...image, isApproved: true, isRejected: false },
  });

  dispatch(getRandomImage());
};

export const rejectImage = (image) => (dispatch, getState) => {
  const { viewedImages } = getState();

  const isAlreadyRejected =
    viewedImages?.data?.length > 0 &&
    viewedImages?.data?.some((item) => item.id === image.id && item.isRejected);

  if (isAlreadyRejected) return dispatch(getRandomImage());

  dispatch({
    type: SET_VIEWED_IMAGES_STARTED,
  });

  dispatch({
    type: SET_VIEWED_IMAGES_SUCCEDED,
    payload: { ...image, isRejected: true, isApproved: false },
  });

  dispatch(getRandomImage());
};

export const removeImage = (id) => (dispatch, getState) => {
  const { viewedImages } = getState();

  dispatch({
    type: DELETE_VIEWED_IMAGES_STARTED,
  });

  const removedImages = viewedImages?.data?.filter((item) => item.id !== id);

  dispatch({
    type: DELETE_VIEWED_IMAGES_SUCCEDED,
    payload: removedImages,
  });
};

export const getViewedImages = () => (dispatch) => {
  dispatch({
    type: GET_VIEWED_IMAGES_STARTED,
  });

  dispatch({
    type: GET_VIEWED_IMAGES_SUCCEDED,
  });
};
