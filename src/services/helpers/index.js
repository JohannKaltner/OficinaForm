import Armazenado from "../redux/store/index";

export function SendToStore(type, values) {
  let valores = {};
  valores.type = type;
  valores[`${Object.keys(values)}`] = values;
  Armazenado.dispatch(valores);
}
