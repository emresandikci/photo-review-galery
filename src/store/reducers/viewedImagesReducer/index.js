import {
  GET_VIEWED_IMAGES_STARTED,
  GET_VIEWED_IMAGES_SUCCEDED,
  GET_VIEWED_IMAGES_FAILED,
  SET_VIEWED_IMAGES_STARTED,
  SET_VIEWED_IMAGES_SUCCEDED,
  SET_VIEWED_IMAGES_FAILED,
  DELETE_VIEWED_IMAGES_STARTED,
  DELETE_VIEWED_IMAGES_SUCCEDED,
  DELETE_VIEWED_IMAGES_FAILED,
} from 'store/types/viewedImages';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIEWED_IMAGES_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case GET_VIEWED_IMAGES_SUCCEDED:
      return {
        ...state,
        data: state.data,
        isLoading: false,
      };

    case GET_VIEWED_IMAGES_FAILED:
      return {
        ...state,
        data: null,
        isLoading: false,
        error: payload,
      };
    case SET_VIEWED_IMAGES_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case SET_VIEWED_IMAGES_SUCCEDED:
      return {
        ...state,
        data: [...state.data, payload],
        isLoading: false,
      };

    case SET_VIEWED_IMAGES_FAILED:
      return {
        ...state,
        data: null,
        isLoading: false,
        error: payload,
      };
    case DELETE_VIEWED_IMAGES_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_VIEWED_IMAGES_SUCCEDED:
      return {
        ...state,
        data: state.data?.filter((f) => f.id !== payload),
        isLoading: false,
      };

    case DELETE_VIEWED_IMAGES_FAILED:
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
