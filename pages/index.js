import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import PrivateRoute from "../components/privateRoute";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

export default function Home() {
  const { Meta } = Card;
  return (
    <PrivateRoute fromPath="/">
      <Layout
        title="Demand Forecast Platform | Home"
        description="SCG web application"
      >
        <Card
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
      </Layout>
    </PrivateRoute>
  );
}
