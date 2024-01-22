import React, { useEffect, useCallback } from "react";
import { Routes, Route, useLocation, Outlet, Navigate, useNavigate } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";
import jwt_decode from "jwt-decode";

import routes from "routes";
import useStore from "store";

const PrivateRoute = () => {
  const isLoggedIn = useStore((state) => state.auth.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
const UnprotectedRoute = () => {
  const isLoggedIn = useStore((state) => state.auth.isLoggedIn);

  return !isLoggedIn ? <Outlet /> : <Navigate to="/users" />;
};
export default function App() {
  const getAppToken = useStore((state) => state.getAppToken);
  const appLoading = useStore((state) => state.auth.appLoading);
  const token = useStore((state) => state.auth.loginInfo?.AccessToken);
  const logout = useStore((state) => state.logout);
  let location = useLocation();

  const checkToken = useCallback(() => {
    if (token) {
      let decodedToken = jwt_decode(token);
      let currentDate = new Date();

      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired.");
        logout();
      } else {
        console.log("Valid token");
      }
    }
  }, [logout, token]);

  useEffect(() => {
    checkToken();
    // console.log(location);
  }, [checkToken, location]);
  useEffect(() => {
    getAppToken();
  }, [getAppToken]);

  return (
    <div>
      {appLoading ? (
        <Loading></Loading>
      ) : (
        <Routes>
          <>
            {routes.map((route) => {
              return route.protected && route.menu ? (
                route.nested.map((nestedRoute) => (
                  <Route
                    key={nestedRoute.label}
                    exact
                    path={nestedRoute.path}
                    element={<PrivateRoute />}
                  >
                    <Route
                      exact
                      path={nestedRoute.path}
                      element={<nestedRoute.component />}
                    />
                  </Route>
                ))
              ) : route.protected ? (
                <Route
                  key={route.label}
                  exact
                  path={route.path}
                  element={<PrivateRoute />}
                >
                  <Route
                    exact
                    path={route.path}
                    element={<route.component />}
                  />
                </Route>
              ) : (
                <Route
                  key={route.label}
                  exact
                  path={route.path}
                  element={<UnprotectedRoute />}
                >
                  <Route
                    exact
                    path={route.path}
                    element={<route.component />}
                  />
                </Route>
              );
            })}
          </>
        </Routes>
      )}
    </div>
  );
}

function Loading() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      bg="linear-gradient(to right, #56ab2f, #a8e063)"
    >
      <Spinner size="xl"></Spinner>
    </Flex>
  );
}
