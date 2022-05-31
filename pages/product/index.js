import Layout from "../../components/layout";
import PrivateRoute from "../../components/privateRoute";
import Product from "../../modules/product/Product";

export default function ProductPage() {
  return (
    <PrivateRoute>
      <Layout>
        <Product />
      </Layout>
    </PrivateRoute>
  );
}
