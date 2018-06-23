import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"

import createStore, { history } from "./modules"
import AppRouter from "./routes"
import "./utils/fontawesome"
import "./theme/main.scss"
import "@trendmicro/react-sidenav/dist/react-sidenav.css"

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <AppRouter store={store} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
