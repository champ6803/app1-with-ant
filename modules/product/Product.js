import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import { get } from "lodash";
import * as actionsRedux from "../../store/actions";
import { TitleHead } from "../../components/common";
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
  Row,
  Col,
  Table,
  Tag,
  Space,
} from "antd";

function Product(props) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const [productName, setProductName] = useState("");

  return (
    <div className="product-container">
      <Spin spinning={props.isLoading}>
        <TitleHead text="รายการสินค้า" icon="stock" />
        <div className="top-layout">
          <Row gutter={20}>
            <Col md="4">Product Name</Col>
            <Col md="8">
              <Input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                placeholder=""
              />
            </Col>
          </Row>
        </div>
        <div className="content">
          <Table columns={columns} dataSource={data} />
        </div>
      </Spin>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state.page,
  ...state.auth,
  ...state.product,
});

export default connect(mapStateToProps, actionsRedux)(Product);
