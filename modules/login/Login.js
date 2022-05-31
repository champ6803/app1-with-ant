import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import { get } from "lodash";
import * as actionsRedux from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faCircleNotch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import {
  Layout,
  Menu,
  Icon,
  Dropdown,
  Form,
  Button,
  Input,
  Checkbox,
  Spin,
} from "antd";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      const params = {
        username: email,
        password: password,
      };
      props
        .login(params)
        .then((data) => {
          swal({
            title: "Success",
            text: "Login successful",
            icon: "success",
            timer: 1200,
          });
          setTimeout(() => {
            window.location = "/";
          }, 1500);
        })
        .catch((error) => {
          const message = get(
            error,
            "error.message",
            "Something went wrong, Please contact administrator."
          );
          swal("Error!", message, "error");
        });
    }
  };

  const onFinish = (e) => {
    if (email && password) {
      const params = {
        username: email,
        password: password,
      };
      props
        .login(params)
        .then((data) => {
          swal({
            title: "Success",
            text: "Login successful",
            icon: "success",
            timer: 1200,
          });
          setTimeout(() => {
            window.location = "/";
          }, 1500);
        })
        .catch((error) => {
          const message = get(
            error,
            "error.message",
            "Something went wrong, Please contact administrator."
          );
          swal("Error!", message, "error");
        });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Spin spinning={props.isLoading}>
      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <img
              src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
              alt="Login"
            />
          </div>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <p className="form-title">Welcome!</p>
            <p>Login to the Dashboard</p>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              {/* <Input placeholder="Username" /> */}
              <Input
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              {/* <Input.Password placeholder="Password" /> */}
              <Input.Password
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                LOGIN
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Spin>
  );
}

const mapStateToProps = (state) => ({
  ...state.page,
  ...state.auth,
});

export default connect(mapStateToProps, actionsRedux)(Login);
