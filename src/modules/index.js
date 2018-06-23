import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import createHistory from "history/createBrowserHistory"
import { routerReducer, routerMiddleware } from "react-router-redux"
import ReduxThunk from "redux-thunk"
import axios from "axios"
import reducers from "./reducers"

export const history = createHistory()

const middlewares = [routerMiddleware(history), ReduxThunk.withExtraArgument({ api: axios })]
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

export default preloadedState => {
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    preloadedState,
    enhancer
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./", () => {
      const nextReducer = combineReducers({
        ...require("./reducers"),
        router: routerReducer
      })
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
