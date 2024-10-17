import { useLoaderData, useParams } from "react-router";
import { client } from "../../client/client";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { useSelector } from "react-redux";
import { storeType } from "../../store/store";

export async function loader({ params }) {
  return (await client.get(`products/${params.id}`)).data;
}

function Product() {
  const { id } = useParams();
  const product = useSelector((store: storeType) =>
    store.products.items.find((el) => el.id == id)
  );

  return <ProductDetails item={product} />;
}

export default Product;
