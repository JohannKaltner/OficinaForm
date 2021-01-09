import api from "../Api";
import Armazenado from "../redux/store/";
import { SendToStore } from "../helpers/";
import { Handle_GET_Oficinas, Handle_Pagination } from "../redux/actions/action_types";

export function GetOficinas(page) {
  api.get("/oficinas?page=" + page).then((response) => {
    const Arrangment =  response.data.oficinas; 
    const limit = 5
    Armazenado.dispatch({type:Handle_GET_Oficinas , Data: Arrangment})
    Armazenado.dispatch({type:Handle_Pagination, Page: page, Limit: limit, Quantidade : response.data.quantidade
    })
   
  });
}
