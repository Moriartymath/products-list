import { Product } from "../../types/types";

type ProductsListProps = {
  list: Array<Product>;
};

function ProductsList({ list }: ProductsListProps) {
  return (
    <li>
      {list.map((product) => (
        <li>{product.name}</li>
      ))}
    </li>
  );
}

export default ProductsList;
