import React from "react";
import { connect } from "react-redux";
import * as actionsRedux from "../../store/actions";
import Router from "next/router";
import Loading from "../../components/common/Loading";

class Logout extends React.Component {
  static async getInitialProps({ reduxStore }) {}

  componentDidMount = async () => {
    this.props.logout();
    setTimeout(async () => {
      Router.push("/login");
    }, 1000);
  };

  render() {
    return <Loading />;
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
});

export default connect(mapStateToProps, actionsRedux)(Logout);
