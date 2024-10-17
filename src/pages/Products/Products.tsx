import { useLoaderData } from "react-router";
import { client } from "../../client/client";

export async function loader() {
  return (await client.get(`products`)).data;
}

function Products() {
  const { data } = useLoaderData();
  console.log(data);
  return <ul></ul>;
}

export default Products;
