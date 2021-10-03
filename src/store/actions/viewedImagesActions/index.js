import {
  GET_VIEWED_IMAGES_STARTED,
  GET_VIEWED_IMAGES_SUCCEDED,
  SET_VIEWED_IMAGES_STARTED,
  SET_VIEWED_IMAGES_SUCCEDED,
} from 'store/types/viewedImages';

// const API_URL = process.env.API_URL;

export const approveImage = (image, dispatch) => {
  dispatch({
    type: SET_VIEWED_IMAGES_STARTED,
  });

  dispatch({
    type: SET_VIEWED_IMAGES_SUCCEDED,
    payload: { ...image, isApproved: true },
  });
};

export const rejectImage = (image, dispatch) => {
  dispatch({
    type: SET_VIEWED_IMAGES_STARTED,
  });

  dispatch({
    type: SET_VIEWED_IMAGES_SUCCEDED,
    payload: { ...image, isRejected: true },
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
