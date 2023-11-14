import CartModal from "./CartModal/CartModal";
import Shop from "./Shop/Shop";
import classes from "./Shopping.module.css";
import { DUMMY_PRODUCTS } from "./dummy_products";
import { CartContext } from "./ContextStore/cartContext";
import { useState } from "react";

export default function Shopping() {
  const [showCart, setShowCart] = useState(false);
  
  const changeCart = () => {
    setShowCart(!showCart);
  }  

  const onAddToCart = (product) => {
    console.log(product)
  }

  return (
    <>
      <CartContext.Provider value={{items:[{name:"abcd", price:100,quantity:1}]}}>
        {showCart && <CartModal changeCart={changeCart}/>}
        <div className={classes.shoppingbg}>
          <div className={classes.mainheader}>
            <h1>Buy Something</h1>
            <button onClick={changeCart}>Cart</button>
          </div>
          <Shop products={DUMMY_PRODUCTS} onAddToCart={(product) => onAddToCart(product)}></Shop>
        </div>
      </CartContext.Provider>
    </>
  );
}
