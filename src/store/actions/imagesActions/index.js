import { GET_IMAGE_FAILED, GET_IMAGE_STARTED, GET_IMAGE_SUCCEDED } from 'store/types/images';
import { constant } from 'utils';
const API_URL = process.env.API_URL;
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

const { httpStatus } = constant;

export const getRandomImage = async (dispatch) => {
  const randomPhotoURL = `${API_URL}/photos/random?client_id=${ACCESS_KEY}`; //`${API_URL}/photos/random`;
  try {
    dispatch({
      type: GET_IMAGE_STARTED,
    });
    const response = await fetch(randomPhotoURL);

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: GET_IMAGE_SUCCEDED,
        payload: data,
      });
    } else if (response.status === httpStatus.FORBIDDEN) {
      dispatch({
        type: GET_IMAGE_FAILED,
        payload: 'Rate Limit Exceeded!',
      });
    }
  } catch (err) {
    dispatch({
      type: GET_IMAGE_FAILED,
      payload: err,
    });
  }
};
