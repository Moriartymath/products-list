import React, { useState } from "react";
import { Product } from "../../../types/types";
import styles from "./Item.module.css";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addItems } from "../../../store/productSlice";

type ModalProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  list: Array<Product>;
};

function ModalProduct({ setIsOpenModal, list }: ModalProps) {
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);
  const dispatch = useDispatch();
  const onConfirm = () => {
    if (selectedItem) {
      dispatch(addItems({ ...selectedItem, itemCount: count }));

      setIsOpenModal(false);
    }
  };
  return (
    <Modal isOpen={true}>
      <div className={styles.modalContainer}>
        <button
          className={styles.exitButtn}
          onClick={() => setIsOpenModal(false)}
        >
          &#x2715;
        </button>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          {list
            .filter((el) => el.name.includes(search))
            .map((el) => {
              return <p onClick={() => setSelectedItem(el)}>{el.name}</p>;
            })}
        </div>
        {selectedItem && (
          <>
            <div className={styles.detailsModal}>
              <div className={styles.modalImageContainer}>
                <img src={selectedItem.imageUrl} alt="Image" />
              </div>
              <div className={styles.containerDetailsModal}>
                <h2>Name: {selectedItem.name}</h2>
                <div className={styles.containerCount}>
                  <h2>Count: {count}</h2>
                  <input
                    type="number"
                    min={1}
                    max={selectedItem.count}
                    defaultValue={1}
                    onChange={(e) => setCount(+e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <button onClick={onConfirm}>Confirm</button>
              <button>Cancel</button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

export default ModalProduct;
