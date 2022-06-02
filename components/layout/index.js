import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Img from "next/image";
import Router, { withRouter } from "next/router";
import * as actionsRedux from "../../store/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUserCircle,
  faCircleNotch,
  faSignOutAlt,
  faAngleDown,
  faShoppingCart,
  faTachometerAlt,
  faBookOpen,
  faShoppingBag,
  faCreditCard,
  faArchive,
  faUser,
  faCogs,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import { Layout, Menu, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function LayoutPage(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="site-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img className="img-style" src="/images/logo/logo.png" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-background"
          style={{
            background: "#343a40",
            padding: "0 16px",
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          }}
        >
          <div className="left-header">
            <div className="icon-menu">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </div>

            <Breadcrumb style={{ margin: "16px 0" }} separator="">
              <Breadcrumb.Item style={{ color: "white" }}>Home</Breadcrumb.Item>
              <Breadcrumb.Separator style={{ color: "white !important" }} />
              <Breadcrumb.Item style={{ color: "white" }}>List</Breadcrumb.Item>
              <Breadcrumb.Separator style={{ color: "white" }} />
              <Breadcrumb.Item style={{ color: "white" }}>App</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: 10,
            padding: 12,
            background: "#fff",
            minHeight: 280,
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            borderRadius: 5,
            overflow: "auto",
          }}
        >
          {props.children}
        </Content>
        <Footer
          style={{
            height: "43px",
            padding: "10px 15px",
            background: "white",
          }}
        >
          SCB (Production) © 2022 - RDT
        </Footer>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  ...state.auth,
});

export default withRouter(connect(mapStateToProps, actionsRedux)(LayoutPage));
