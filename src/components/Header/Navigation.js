import React from "react"
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default ({ push, pathname }) => {
  return (
    <SideNav onSelect={link => push(link)}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="/">
        <NavItem eventKey="/" active={pathname === "/"}>
          <NavIcon>
            <FontAwesomeIcon icon="home" />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="/dashboard" active={pathname === "/dashboard"}>
          <NavIcon>
            <FontAwesomeIcon icon="tachometer-alt" />
          </NavIcon>
          <NavText>Dashboard</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  )
}
