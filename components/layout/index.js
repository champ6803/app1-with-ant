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
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function LayoutPage(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu
            style={{ float: "right" }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            //items={items1}
          >
            <Menu.Item
              key="setting:1"
              onClick={(e) => {
                Router.push("/product");
              }}
            >
              Menu1
            </Menu.Item>
            <Menu.Item
              key="setting:2"
            >
              Menu2
            </Menu.Item>
            <Menu.Item
              onClick={(e) => {
                Router.push("/logout");
              }}
              key="setting:3"
            >
              Logout
            </Menu.Item>
          </Menu>
        </Header>
        {/* <Content style={{ margin: "0 16px" }}>
          
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {props.children}
          </div>
        </Content> */}
        <div style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Content
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
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  ...state.auth,
});

export default withRouter(connect(mapStateToProps, actionsRedux)(LayoutPage));
