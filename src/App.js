import React from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { withRouter } from "react-router-dom"
import HeaderBar from "./components/Header/HeaderBar"
import Navigation from "./components/Header/Navigation"
import AppRouter from "./routes"

@withRouter
@connect(
  state => ({ pathname: state.router.location.pathname }),
  { push }
)
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderBar push={this.props.push} />
        <div className="app">
          <Navigation push={this.props.push} pathname={this.props.pathname} />
          <main>
            <AppRouter store={this.props.store} />
          </main>
        </div>
      </React.Fragment>
    )
  }
}

export default App
