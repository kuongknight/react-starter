import React from "react"
import { Route, Switch } from "react-router-dom"
import { asyncComponent } from "react-async-component"
import PrivateRoute from "../components/PrivateRoute"
import Home from "./home/Home"
import Login from "./login/Login"

export default ({ store }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <PrivateRoute
      path="/dashboard"
      store={store}
      component={asyncComponent({ resolve: () => import("./dashborad/Dashboard") })}
    />
  </Switch>
)
