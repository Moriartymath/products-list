import { useState } from "react";
import { Product } from "../../../types/types";
import styles from "./Item.module.css";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../store/productSlice";
import Modal from "react-modal";
import { useNavigate } from "react-router";

type ItemProps = {
  data: Product;
};

function Item({ data }: ItemProps) {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  const onDelete = () => {
    dispatch(removeItem(data.id));
    setIsOpenModal(false);
  };

  return (
    <li
      className={styles.item}
      onClick={() => navigate(`/products/${data.id}`)}
    >
      <div className={styles.imageContainer}>
        <img src={data.imageUrl} alt="Image" />
      </div>
      <div className={styles.details}>
        <h3>{data.name}</h3>
        <h3>Count: {data.itemCount}</h3>
        <button onClick={() => setIsOpenModal(true)}>Delete</button>
      </div>
      {isOpenModal && (
        <Modal isOpen={isOpenModal}>
          <div className={styles.modalContainer}>
            <button
              className={styles.exitButtn}
              onClick={() => setIsOpenModal(false)}
            >
              &#x2715;
            </button>
            <h1>Are you sure you want to delete?</h1>
            <button onClick={onDelete}>Yes</button>
            <button onClick={() => setIsOpenModal(false)}>No</button>
          </div>
        </Modal>
      )}
    </li>
  );
}

export default Item;
