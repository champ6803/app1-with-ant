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
  Steps,
  PageHeader,
  Menu,
  Dropdown,
  Button,
  Typography,
  Tabs,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ClockCircleOutlined,
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
  MoreOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
const { Step } = Steps;
const { Paragraph } = Typography;
const { TabPane } = Tabs;

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

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.alipay.com/"
            >
              1st menu item
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.taobao.com/"
            >
              2nd menu item
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.tmall.com/"
            >
              3rd menu item
            </a>
          ),
        },
      ]}
    />
  );

  const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu} placement="bottomRight">
      <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
    </Dropdown>
  );

  const routes = [
    {
      path: "index",
      breadcrumbName: "First-level Menu",
    },
    {
      path: "first",
      breadcrumbName: "Second-level Menu",
    },
    {
      path: "second",
      breadcrumbName: "Third-level Menu",
    },
  ];

  const IconLink = ({ src, text }) => (
    <a className="example-link">
      <img className="example-link-icon" src={src} alt={text} />
      {text}
    </a>
  );

  const content = (
    <>
      <Paragraph>
        Ant Design interprets the color system into two levels: a system-level
        color system and a product-level color system.
      </Paragraph>
      <Paragraph>
        Ant Design&#x27;s design team preferred to design with the HSB color
        model, which makes it easier for designers to have a clear psychological
        expectation of color when adjusting colors, as well as facilitate
        communication in teams.
      </Paragraph>
      <div>
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          text="Quick Start"
        />
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
          text=" Product Info"
        />
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
          text="Product Doc"
        />
      </div>
    </>
  );

  const Content = ({ children, extraContent }) => (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );

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
          <Col md={12}>
            <Carousel afterChange={onChange}>
              <div>
                {/* <h3 style={contentStyle}>1</h3> */}
                <img src="/images/bot-banner.jpg" />
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
          <Col md={12}>
            <Card className="card-custom">
              <PageHeader
                title="Title"
                className="site-page-header"
                subTitle="This is a subtitle"
                tags={<Tag color="blue">Running</Tag>}
                extra={[
                  <Button key="3">Operation</Button>,
                  <Button key="2">Operation</Button>,
                  <Button key="1" type="primary">
                    Primary
                  </Button>,
                  <DropdownMenu key="more" />,
                ]}
                avatar={{
                  src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
                }}
              >
                <Content
                  extraContent={
                    <img
                      src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                      alt="content"
                      width="100%"
                    />
                  }
                >
                  {content}
                </Content>
              </PageHeader>
            </Card>
          </Col>
        </Row>
        <Row className="mb-20">
          <Col md={24}>
            <Card className="card-custom">
              <PageHeader
                title="Data Entity Name"
                className="site-page-header"
                subTitle="1.4 Mortgage Loan (DER_MGL)"
                tags={<Tag color="blue">Running</Tag>}
                extra={[
                  <Button key="3">Operation</Button>,
                  <Button key="2">Operation</Button>,
                  <Button key="1" type="primary">
                    Primary
                  </Button>,
                  <DropdownMenu key="more" />,
                ]}
                avatar={{ src: "/images/bot-logo.png" }}
              >
                <Content>
                  <Steps>
                    <Step
                      status="finish"
                      title="Login"
                      icon={<UserOutlined />}
                    />
                    <Step
                      status="finish"
                      title="Verification"
                      icon={<SolutionOutlined />}
                    />
                    <Step
                      status="process"
                      title="Pay"
                      icon={<LoadingOutlined />}
                    />
                    <Step status="wait" title="Done" icon={<SmileOutlined />} />
                  </Steps>
                </Content>
              </PageHeader>
            </Card>
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
      </Layout>
    </PrivateRoute>
  );
}
