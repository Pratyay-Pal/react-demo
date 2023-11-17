import CartModal from "./CartModal/CartModal";
import Shop from "./Shop/Shop";
import classes from "./Shopping.module.css";
import { DUMMY_PRODUCTS } from "./dummy_products";
import CartContextProvider from "./ContextStore/cartContext";
import { useState } from "react";

export default function Shopping() {
  const [showCart, setShowCart] = useState(false);
  const changeCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <CartContextProvider>
        {showCart && <CartModal changeCart={changeCart} />}
        <div className={classes.shoppingbg}>
          <div className={classes.mainheader}>
            <h1>Buy Something</h1>
            <button onClick={changeCart}>Cart</button>
          </div>
          <Shop
            products={DUMMY_PRODUCTS}
          ></Shop>
        </div>
      </CartContextProvider>
    </>
  );
}
