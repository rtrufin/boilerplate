import React from "react";
import { Route, NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const NavigationLink = ({ label, to, exact }) => {
  return (
    
    <NavLink
      exact={exact}
      activeClassName="active"
      to={to}
    >
      {label}
    </NavLink>
  );
};

NavigationLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool
}


export default NavigationLink;
