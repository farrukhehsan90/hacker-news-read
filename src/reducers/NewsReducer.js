import { GET_NEWS, LOADING } from "../actions/Types";

const initialState = {
  count: 0,
  limit: 30,
  totalItems: 0,
  data: []
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_NEWS:
      return {
        ...state,
        loading: false,
        count: action.payload.count,
        data: action.payload.data,
        totalItems: action.payload.totalItems
      };

    default:
      return state;
  }
};

export default newsReducer;
