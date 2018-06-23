import React from "react"
import Navbar from "react-bootstrap/lib/Navbar"
import Nav from "react-bootstrap/lib/Nav"
import NavDropdown from "react-bootstrap/lib/NavDropdown"
import NavItem from "react-bootstrap/lib/NavItem"
import MenuItem from "react-bootstrap/lib/MenuItem"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import s from "./HeaderBar.scss"

export default class extends React.Component {
  render() {
    const { push } = this.props
    return (
      <Navbar fluid collapseOnSelect className={s.root}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Kuong-Knight</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="https://www.facebook.com/java.reactjs.vuejs.nodejs">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </NavItem>
            <NavItem eventKey={2} onClick={() => push("/dashboard")}>
              Dashboard
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://github.com/kuongknight/">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
