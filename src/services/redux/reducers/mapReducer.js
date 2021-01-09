import { HANDLE_CHANGE_VIEWPORT } from "../actions/action_types";

const initialState = {
  viewport: {
    latitude: 0,
    longitude: 0,
  },
};

console.log(initialState);
export const MapReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_VIEWPORT: 
      return {
        ...state,
        viewport: {
          latitude: action.viewport.latitude,
          longitude: action.viewport.longitude,
        },
      };

    default:
      return state;
  }
};
