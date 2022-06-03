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
import { Layout, Menu, Breadcrumb, Dropdown, Space } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,
  DownOutlined,
  KeyOutlined,
  ShoppingOutlined,
  UsergroupAddOutlined,
  HomeOutlined,
  ContainerOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function LayoutPage(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const pathName = props.router.pathname;

  const menu = (
    <Menu
      onClick={handleClickUser}
      items={[
        {
          key: "1",
          label: "Profile",
          icon: <UserOutlined />,
        },
        {
          key: "2",
          label: <Link href="/logout">Logout</Link>,
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  const handleClickMenu = (e) => {
    console.log("e => ", e);
    switch (e.key) {
      case "1":
        Router.push("/");
        break;
      case "2":
        Router.push("/product");
        break;
    }
  };

  const handleClickUser = (e) => {
    console.log("e => ", e);
    switch (e && e.key) {
      case "1":
        break;
      case "2":
        Router.push("/logout");
        break;
      default:
        break;
    }
  };

  const getCurrentMenu = (pathName) => {
    switch (pathName) {
      case "/":
        setSelectedMenu(["1"]);
        break;
      case "/product":
        setSelectedMenu(["2"]);
        break;
    }
  };

  useEffect(() => {
    getCurrentMenu(pathName);
  }, [pathName]);

  return (
    <Layout className="site-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <Img
            width={40}
            height={40}
            className="img-style"
            src="/images/logo/logo.png"
          />
        </div>
        <Menu
          onClick={handleClickMenu}
          theme="dark"
          mode="inline"
          selectedKeys={selectedMenu}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <ShoppingOutlined />,
              label: "Product",
            },
            {
              key: "3",
              icon: <UsergroupAddOutlined />,
              label: "Customer",
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

            <Breadcrumb style={{ margin: "0 16px" }} separator="">
              <Breadcrumb.Item>
                <HomeOutlined style={{ color: "white" }} />
                <Link href="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <ShoppingOutlined style={{ color: "white" }} />
                <Link href="/">Product</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
              <ContainerOutlined style={{ color: "white" }}/>
                <Link href="/">Item</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <Dropdown overlay={menu}>
              <a style={{ color: "white" }} onClick={(e) => e.preventDefault()}>
                <Space>
                  Username
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: 10,
            padding: 12,
            // background: "#f0f2f5",
            minHeight: 280,
            // boxShadow:
            //   "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            // borderRadius: 5,
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
  ...state.page,
  ...state.auth,
});

export default withRouter(connect(mapStateToProps, actionsRedux)(LayoutPage));
