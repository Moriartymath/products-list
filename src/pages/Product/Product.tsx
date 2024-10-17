import { useLoaderData } from "react-router";
import { client } from "../../client/client";

export async function loader({ params }) {
  return (await client.get(`products/${params.id}`)).data;
}

function Product() {
  const { data } = useLoaderData();

  console.log(data);
  return <div></div>;
}

export default Product;
