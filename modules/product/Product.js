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
  Select,
  Card,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;

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
  const [filter, setFilter] = useState({ productName: "", nickName: "" });

  const handleChange = (key, value) => {
    console.log(`selected ${value}`);
    setFilter({ ...filter, [key]: value });
  };

  useEffect(() => {
    console.log("filter => ", filter);
  }, [filter]);

  return (
    <div className="product-container">
      <Spin spinning={props.isLoading}>
        <Card className="card-custom" title="รายการสินค้า">
          {/* <TitleHead text="รายการสินค้า" icon="stock" /> */}
          <div className="top-layout">
            <Row gutter={20}>
              <Col span={2}>Customer Name</Col>
              <Col span={4}>
                <Input
                  name="productName"
                  value={filter.productName}
                  onChange={(e) => handleChange("productName", e.target.value)}
                  type="text"
                  placeholder=""
                />
              </Col>
              <Col span={6}>
                <Select
                  name="nickName"
                  value={filter.nickName}
                  className="select-custom"
                  defaultValue="lucy"
                  onChange={(e) => handleChange("nickName", e)}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Col>
              <Col>
                <Button type="primary" shape="round" icon={<SearchOutlined />}>
                  Search
                </Button>
              </Col>
            </Row>
          </div>
          <div className="content">
            <Table columns={columns} dataSource={data} />
          </div>
        </Card>
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
