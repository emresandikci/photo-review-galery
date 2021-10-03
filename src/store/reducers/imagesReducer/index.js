import { GET_IMAGE_STARTED, GET_IMAGE_SUCCEDED, GET_IMAGE_FAILED } from 'store/types/images';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMAGE_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case GET_IMAGE_SUCCEDED:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };

    case GET_IMAGE_FAILED:
      return {
        ...state,
        data: null,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
export default reducer;
