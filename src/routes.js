import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

export const routes = [
  {
    path: "/",
    exact: true,
    component: require("./components/home/HomePage").default,
    label: "Home"
  },
  {
    path: "/about",
    component: require("./components/about/AboutPage").default,
    label: "About"
  },
  {
    path: "/courses",
    component: require("./components/course/CoursesPage").default,
    label: "Courses"
  }
];

const AppRoutes = () => {
  let appRoutes = [];
  routes.map((route, index) => {
    appRoutes.push(
      <Route
        key={`route-${index}`}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    );
  });
  return appRoutes;
};

export default AppRoutes;
