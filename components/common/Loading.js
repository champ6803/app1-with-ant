import React from "react";
import { connect } from "react-redux";
import { Spin } from "antd";
import * as actionsRedux from "../../store/actions";

const Loading = (props) => {
  return (
    <Spin spinning={true}></Spin>
  );
};

const mapStateToProps = (state) => ({
  ...state.page
});

export default connect(mapStateToProps, actionsRedux)(Loading);