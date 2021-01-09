import { combineReducers } from "redux";
import { agendamentoReducer } from "./agendamentoReducer";
import { clickReducer } from "./clickReducer";
import { MapReducer } from "./mapReducer";
import { oficinaReducer } from "./oficinaReducer";

const Reducer = combineReducers({
  clickState: clickReducer,
  agendamentoState: agendamentoReducer,
  mapState: MapReducer,
  oficinaState: oficinaReducer,
});

export default Reducer;
