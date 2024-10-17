import Item from "./Item/Item";
import styles from "./ProductsList.module.css";
import { useSelector } from "react-redux";
import { storeType } from "../../store/store";

function ProductsList() {
  const list = useSelector((store: storeType) => store.products.items);

  return (
    <ul className={styles.list}>
      {list.map((product) => (
        <Item key={product.id} data={product} />
      ))}
    </ul>
  );
}

export default ProductsList;
