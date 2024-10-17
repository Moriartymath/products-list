import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Products, { loader as ProductsLoader } from "./pages/Products/Products";
import Product, { loader as ProductLoader } from "./pages/Product/Product";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { action } from "./components/ProductDetails/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        path="products"
        element={<Products />}
        loader={ProductsLoader}
      />
      <Route
        path="products/:id"
        element={<Product />}
        action={action}
        loader={ProductLoader}
      />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
