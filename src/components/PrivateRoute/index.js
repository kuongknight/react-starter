import React from "react"
import _ from "lodash"
import { Route } from "react-router-dom"
import { Redirect } from "react-router-dom"

export default ({ component: Component, store, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      _.get(store.getState(), "auth.isAuthenticated") === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)
