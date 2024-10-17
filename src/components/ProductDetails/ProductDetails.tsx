import { useEffect, useState } from "react";
import { Product } from "../../types/types";
import styles from "./ProductDetails.module.css";
import Modal from "react-modal";
type ProductDetailsProps = {
  item: Product;
};
import {
  Form,
  useActionData,
  useFormAction,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateItemInfo } from "../../store/productSlice";

export async function action({ request }) {
  const data = await request.formData();
  console.log(data);
  const newObj = {
    imageUrl: data.get("imageUrl"),
    name: data.get("name"),
    count: data.get("count"),
    size: {
      width: data.get("width"),
      height: data.get("height"),
    },
    weight: data.get("weight"),
    comments: data.get("comments"),
    itemCount: data.get("itemCount"),
  };
  return newObj;
}

function ProductDetails({ item }: ProductDetailsProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const data = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateItemInfo({ item: data, id: item.id }));
    setIsOpenModal(false);
  }, [data]);

  console.log(item);

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/products")}>
        Back to all products
      </button>
      <div>
        {Object.keys(item)
          .filter((key) => key !== "comments")
          .map((key) => {
            const data = item[key];
            if (key === "size")
              return (
                <h2
                  key={key}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span>Width: {data.width}</span>
                  <span>Height: {data.height}</span>
                </h2>
              );
            return (
              <h2 key={key}>
                {key}: {data}
              </h2>
            );
          })}

        <ul>
          {item.comments.map((comment, i) => (
            <li key={comment + i}>
              <p>{comment.date}</p>
              <div>{comment.description}</div>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => setIsOpenModal(true)}>Edit</button>
      {isOpenModal && (
        <Modal isOpen={isOpenModal}>
          <div className={styles.modalContainer}>
            <button
              className={styles.exitButtn}
              onClick={() => setIsOpenModal(false)}
            >
              &#x2715;
            </button>
            <Form method="POST">
              {Object.keys(item)
                .filter((key) => key !== "comments" && key !== "id")
                .map((key) => {
                  const data = item[key];
                  if (key === "size")
                    return (
                      <div key={key}>
                        <div>
                          <p>Set widht</p>
                          <input
                            name="width"
                            placeholder={"width"}
                            defaultValue={data.width}
                          />
                        </div>
                        <div>
                          <p>Set height</p>
                          <input
                            name="height"
                            placeholder={"height"}
                            defaultValue={data.height}
                          />
                        </div>
                      </div>
                    );
                  return (
                    <div>
                      <p>Set {key}</p>
                      <input
                        key={key}
                        name={key}
                        placeholder={key}
                        defaultValue={data}
                      />
                    </div>
                  );
                })}
              <div>
                <button>Save</button>
                <button>Cancel</button>
              </div>
            </Form>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProductDetails;
