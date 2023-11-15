import CartModal from "./CartModal/CartModal";
import Shop from "./Shop/Shop";
import classes from "./Shopping.module.css";
import { DUMMY_PRODUCTS } from "./dummy_products";
import { CartContext } from "./ContextStore/cartContext";
import { useState } from "react";

export default function Shopping() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState({
    items: [],
  });

  const changeCart = () => {
    setShowCart(!showCart);
  };

  const onAddToCart = (id) => {
    console.log("Adding " + id + " to cart");
    setCart((prevCart) => {
      const updatedItems = [...prevCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        console.log(id + " already exists. Increasing quantity by 1");
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  };

  const onChangeQuantity = (id, changeType) => {
    console.log("Quantity of " +id +" was " +(changeType === "+" ? "increased by 1" : "decreased by 1"));
    setCart((prevCart) => {
      const updatedItems = [...prevCart.items];
      const indexOfItem = updatedItems.findIndex((item) => {
        return item.id === id;         
      });
      const cartItem = updatedItems[indexOfItem];
      if (cartItem.quantity - 1 === 0 && changeType === "-") {
        updatedItems.splice(indexOfItem, 1);
      } else {
        const updatedItem = {
          ...cartItem,
          quantity:
            changeType === "+" ? cartItem.quantity + 1 : cartItem.quantity - 1,
        };
        updatedItems[indexOfItem] = updatedItem;
      }
      return {items:updatedItems,}
    });
  };

  const cartCtx = {
    items: cart.items,
    onAddToCart: onAddToCart,
    onChangeQuantity: onChangeQuantity,
  };

  return (
    <>
      <CartContext.Provider value={cartCtx}>
        {showCart && <CartModal changeCart={changeCart} />}
        <div className={classes.shoppingbg}>
          <div className={classes.mainheader}>
            <h1>Buy Something</h1>
            <button onClick={changeCart}>Cart</button>
          </div>
          <Shop
            products={DUMMY_PRODUCTS}
            onAddToCart={(product) => onAddToCart(product.id)}
          ></Shop>
        </div>
      </CartContext.Provider>
    </>
  );
}
