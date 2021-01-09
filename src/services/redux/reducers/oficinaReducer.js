import { Handle_GET_Oficinas } from "../actions/action_types";

const INITIAL_STATE = {
  Data: [],
};

export const oficinaReducer = (state = INITIAL_STATE, action) => { 
  switch (action.type) {
    case Handle_GET_Oficinas:
      return {
        ...state,
        Data: action.Data,
      };
    default:
  }
  return state;
};
