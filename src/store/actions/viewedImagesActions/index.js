import {
  GET_VIEWED_IMAGES_STARTED,
  GET_VIEWED_IMAGES_SUCCEDED,
  SET_VIEWED_IMAGES_STARTED,
  SET_VIEWED_IMAGES_SUCCEDED,
  DELETE_VIEWED_IMAGES_STARTED,
  DELETE_VIEWED_IMAGES_SUCCEDED,
} from 'store/types/viewedImages';

// const API_URL = process.env.API_URL;

export const approveImage = (image, dispatch) => {
  dispatch({
    type: SET_VIEWED_IMAGES_STARTED,
  });

  dispatch({
    type: SET_VIEWED_IMAGES_SUCCEDED,
    payload: { ...image, isApproved: true, isRejected: false },
  });
};

export const rejectImage = (image, dispatch) => {
  dispatch({
    type: SET_VIEWED_IMAGES_STARTED,
  });

  dispatch({
    type: SET_VIEWED_IMAGES_SUCCEDED,
    payload: { ...image, isRejected: true, isApproved: false },
  });
};

export const removeImage = (id, dispatch) => {
  dispatch({
    type: DELETE_VIEWED_IMAGES_STARTED,
  });

  dispatch({
    type: DELETE_VIEWED_IMAGES_SUCCEDED,
    payload: id,
  });
};

export const getViewedImages = (dispatch) => {
  dispatch({
    type: GET_VIEWED_IMAGES_STARTED,
  });

  dispatch({
    type: GET_VIEWED_IMAGES_SUCCEDED,
  });
};
