import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import PrivateRoute from "../components/privateRoute";

export default function Home() {
  return (
    <PrivateRoute fromPath="/">
      <Layout
        title="Demand Forecast Platform | Home"
        description="SCG web application"
      >
        <div className="container-fluid px-4">
          <h1>Welcome to Bag Nice Style!</h1>
          <div className="card mb-4">
            <div className="card-body">
              This page is an example of using the light side navigation option.
              By appending the
              <code>.sb-sidenav-light</code>
              class to the
              <code>.sb-sidenav</code>
              class, the side navigation will take on a light color scheme. The
              <code>.sb-sidenav-dark</code>
              is also available for a darker option.
            </div>
          </div>
        </div>
      </Layout>
    </PrivateRoute>
  );
}
