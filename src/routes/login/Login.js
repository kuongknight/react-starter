import React from "react"
import { connect } from "react-redux"
import Button from "react-bootstrap/lib/Button"
import { push } from "react-router-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { login } from "../../modules/auth/action"

@connect(
  state => ({ loading: state.auth.loading }),
  { login, push }
)
export default class extends React.Component {
  handleLogin = () => {
    this.props.login().then(() => this.props.push("/dashboard"))
  }
  render() {
    return (
      <div className="text-center">
        <h1>LOGIN PAGE</h1>
        <div>{this.props.loading && <FontAwesomeIcon icon="spinner" spin size="4x" />}</div>
        <Button onClick={this.handleLogin}>Login</Button>
      </div>
    )
  }
}
