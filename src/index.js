import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"

import createStore, { history } from "./modules"
import "./utils/fontawesome"
import "./theme/main.scss"
import "@trendmicro/react-sidenav/dist/react-sidenav.css"

const store = createStore()

const render = App =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App store={store} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  )
render(App)
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App)
  })
}
registerServiceWorker()
