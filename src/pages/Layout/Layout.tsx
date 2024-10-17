import { Outlet } from "react-router";
import styles from "./Layout.module.css";
import { useState } from "react";
import ModalProduct from "../../components/ProductsList/Item/Modal";

function Layout() {
  return (
    <>
      <header className={styles.header}>
        <h2>Products</h2>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
