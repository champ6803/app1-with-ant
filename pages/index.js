import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import PrivateRoute from "../components/privateRoute";
import {
  Card,
  Avatar,
  Row,
  Col,
  Carousel,
  Timeline,
  Table,
  Space,
  Tag,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Home() {
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
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <PrivateRoute fromPath="/">
      <Layout
        title="Demand Forecast Platform | Home"
        description="SCG web application"
      >
        <Row gutter={20} className="mb-20">
          <Col md={24}>
            <Carousel afterChange={onChange}>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </Col>
        </Row>
        <Row gutter={20} className="mb-20">
          <Col md={12}>
            <Card className="card-custom">
              <Timeline mode="alternate">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">
                  Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item
                  dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </Timeline.Item>
                <Timeline.Item color="red">
                  Network problems being solved 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item
                  dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                >
                  Technical testing 2015-09-01
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
          <Col md={12}>
            <Card className="card-custom">
              <Table columns={columns} dataSource={data} />
            </Card>
          </Col>
        </Row>
        <Row gutter={20} className="mb-20">
          <Col md={12}>
            <Card className="card-custom">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col md={12}>
            <Card
              className="card-custom"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
      </Layout>
    </PrivateRoute>
  );
}
