import { Outlet } from "react-router";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <>
      <header>
        <h2>Products</h2>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
