import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Signup from "./components/Signup";
import ScrollToTop from "./components/ScrollTop";
import LoginForm from "./components/Login/loginForm";
import AgendamentosDetail from "./components/agendamentos/AgendamentosDetail";

export default (props) => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/painel' component={Dashboard} />
        <Route exact path='/perfil' component={Signup} />
        {/* <Route exact path='/wizard' component={Wizard} /> */}
        {/* <Route exact path='/cards' component={Cards} /> */}
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/OficinaDetail/:id' component={AgendamentosDetail} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);
