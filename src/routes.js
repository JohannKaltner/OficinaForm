import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Signup from "./components/Signup";
import ScrollToTop from "./components/ScrollTop";
import LoginForm from "./components/Login/loginForm";
import AgendamentosDetail from "./components/agendamentos/AgendamentosDetail";
import Agendamentos from "./components/agendamentos/Agendamentos";
import NewLoginForm from "./components/Login/NewLoginForm";
import MapContainer from "./components/map/MapContainer";

export default function Routes(props){

  useEffect(() => {
    checkAccount()
 }, []);
 
 const checkAccount = async ( ) => {
   const logado = localStorage.getItem("logado")
   console.log("validando usuario....", logado === "null" )
   if(logado === true && window.location.href !== '/login') {
     window.location.href = 'login'
     alert("usuario não está autenticado! redirecionando ao login")     
  } else {
        console.log("usuario está autenticado!")     
      }
 }

return ( 
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/painel' component={Dashboard} />
        <Route exact path='/perfil' component={Signup} />
        {/* <Route exact path='/wizard' component={Wizard} /> */}
        {/* <Route exact path='/cards' component={Cards} /> */}
        <Route exact path='/login' component={NewLoginForm} />
        <Route exact path='/OficinaDetail/:id' component={AgendamentosDetail} />
        <Route exact path='/agendamentos' component={Agendamentos} />
        <Route exact path='/map' component={MapContainer} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);
}