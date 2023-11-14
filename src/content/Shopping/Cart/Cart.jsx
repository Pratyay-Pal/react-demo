import classes from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../ContextStore/cartContext";

export default function Cart() {
  const cartContext = useContext(CartContext);
  let sum = 0;
  const calcTotal = () => {
    cartContext.items.forEach((item) => {
      sum = sum + item.price * item.quantity;
    });
  };

  return (
    <>
      <div className={classes.cardcontainer}>
        {cartContext.items.length === 0 ? (
          <h1>Cart is empty. Buy something.</h1>
        ) : (
          cartContext.items.map((item) => (
            <>
              <div className={classes.card}>
                <div className={classes.cardblock}>
                  <span>Name</span>
                  <h2>{item.name}</h2>
                </div>
                <div className={classes.cardblock}>
                  <span>Price</span>
                  <h2>{item.price}</h2>
                </div>
              </div>
              <button className={classes.minusbutton}>-</button>
              <div className={classes.quantitybutton}>
                <h2>{item.quantity}</h2>
              </div>
              <button className={classes.plusbutton}>+</button>
            </>
          ))
        )}
      </div>
    </>
  );
}
