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
  ContainerOutlined,
  DatabaseOutlined,
  IssuesCloseOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function LayoutPage(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const pathName = props.router.pathname;

  const rootSubmenuKeys = [
    "sub1",
    "sub2",
    "sub3",
    "sub4",
    "sub5",
    "sub6",
    "sub7",
    "sub8",
    "sub9",
  ];

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

  const onOpenChange = (val) => {
    setOpenKeys(val);
    // const latestOpenKey = val.find((key) => openKeys.indexOf(key) === -1);
    // if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //   setOpenKeys(val);
    // } else {
    //   setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    // }
  };

  const handleClickMenu = (e) => {
    console.log("e => ", e);
    switch (e.key) {
      case "1":
        Router.push("/");
        break;
      case "3":
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
        setSelectedMenu(["3"]);
        setOpenKeys(["sub2"]);
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
            width={30}
            height={30}
            className="img-style"
            src="/images/scb-logo.png"
          />
          <div className="logo-text">
            <span className="text">Regulatory Data</span>
            <span className="text">Transformation</span>
          </div>
        </div>
        <Menu
          onClick={handleClickMenu}
          theme="dark"
          mode="inline"
          selectedKeys={selectedMenu}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "sub2",
              icon: <DatabaseOutlined />,
              label: "Data Entity",
              children: [
                {
                  key: "3",
                  label: "View & Approve Data Entity",
                },
                {
                  key: "4",
                  label: "Approve Adjust Data Entity",
                },
              ],
            },
            {
              key: "sub5",
              icon: <ShoppingOutlined />,
              label: "Submission",
              children: [
                {
                  key: "6",
                  label: "Fianl Approval",
                },
              ],
            },
            {
              key: "7",
              icon: <IssuesCloseOutlined />,
              label: "Data Issue",
            },
            {
              key: "sub8",
              icon: <UserOutlined />,
              label: "User Data Entry",
              children: [
                {
                  key: "9",
                  label: "User Data Entry",
                },
                {
                  key: "10",
                  label: "User Data Entry - Upload",
                },
                {
                  key: "11",
                  label: "Approve User Data Entry",
                },
              ],
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
                <ContainerOutlined style={{ color: "white" }} />
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
          SCB (Production) ?? 2022 - RDT
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
