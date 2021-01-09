import { createStore } from "redux";
import Reducer from "../reducers";

const Armazenado = createStore(Reducer);

export default Armazenado;
