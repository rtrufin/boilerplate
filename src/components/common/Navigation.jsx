import React, { Component } from "react";
import NavigationLink from "./NavigationLink";
import { routes } from "../../routes";

export default class Navigation extends Component {
  render() {
    const navLinks = [];
    routes.map((route, index) => {
      navLinks.push(
        <NavigationLink
            key={`header-nav-${index}`}
          exact={route.exact}
          label={route.label}
          to={route.path}
        />
      );
      if (index < routes.length - 1) {
        navLinks.push(" | ");
      }
    });
    return navLinks;
  }
}
