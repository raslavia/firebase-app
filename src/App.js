import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/navBar";
import Dashboard from "./components/dashboard/dashboard";
import ProjectDetailes from "./components/projects/projectDetailes";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import CreateProject from "./components/projects/createProject";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetailes} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
