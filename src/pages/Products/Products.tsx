import { useLoaderData } from "react-router";
import { client } from "../../client/client";
import styles from "./Products.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useState } from "react";
import ModalProduct from "../../components/ProductsList/Item/Modal";
export async function loader() {
  return (await client.get(`products`)).data;
}

function Products() {
  const { data } = useLoaderData();
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpenModal(true)}>Add product</button>
      {isOpenModal && (
        <ModalProduct list={data.products} setIsOpenModal={setIsOpenModal} />
      )}
      <ProductsList />
    </div>
  );
}

export default Products;
