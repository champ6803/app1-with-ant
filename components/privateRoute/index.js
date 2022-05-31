import React from "react";
import Router from "next/router";
import * as actionsRedux from "../../store/actions";
import { connect } from "react-redux";
import { getTokenExpirationDate, isExpiredToken } from "../../helpers";

class PrivateRoute extends React.Component {
  static defaultProps = {
    fromPath: "/",
  };

  componentDidMount = async () => {
    const { fromPath, token, permission } = this.props;

    await this.setFromPath(fromPath);

    const userIsAuthenticated = !!token;
    const userTokenExpired = this.isExpired(token);

    const RoutePayload = {
      pathname: "/login"
    };

    if (!userIsAuthenticated) {
      return Router.replace(RoutePayload);
    }

    if (userTokenExpired) {
      return Router.replace(RoutePayload);
    }

    const userIsTaked = await this.getUserInfo(token);
    if (!userIsTaked) {
      return Router.replace(RoutePayload);
    }

    // let is_access = permission.filter((e) => e.url === fromPath && e.auth_view);
    // if (is_access.length === 0 && fromPath !== "/") {
    //   return Router.replace({ pathname: "/no-access" });
    // }

    return true;
  };

  isExpired = (token) => {
    console.log("token expires: ", getTokenExpirationDate(token));
    return isExpiredToken(token);
  };

  getUserInfo = async (token) => {
    return await this.props.getUserInfo({ token });
  };

  setFromPath = async (fromPath) => {
    if (fromPath) {
      await this.props.setFromPath(fromPath);
    }
  };

  render() {
    const { children } = this.props;

    return children;
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
});

export default connect(mapStateToProps, actionsRedux)(PrivateRoute);
