import { combineReducers } from "redux";
import { agendamentoReducer } from "./agendamentoReducer";
import { clickReducer } from "./clickReducer";

const Reducer = combineReducers({
  clickState: clickReducer,
  agendamentoState: agendamentoReducer,
});

export default Reducer;
