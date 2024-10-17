import { useState } from "react";
import { Product } from "../../../types/types";
import styles from "./Item.module.css";
import ModalProduct from "./Modal";

type ItemProps = {
  data: Product;
};

function Item({ data }: ItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.imageContainer}>
        <img src={data.imageUrl} alt="Image" />
      </div>
      <div className={styles.details}>
        <h3>{data.name}</h3>
        <h3>Count: {data.count}</h3>
      </div>
    </li>
  );
}

export default Item;
