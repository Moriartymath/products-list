import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Products, { loader as ProductsLoader } from "./pages/Products/Products";
import Product, { loader as ProductLoader } from "./pages/Product/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        path="products"
        element={<Products />}
        loader={ProductsLoader}
      />
      <Route path="products/:id" element={<Product />} loader={ProductLoader} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
