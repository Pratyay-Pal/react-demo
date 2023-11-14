import classes from "./ShopCard.module.css";

export default function Card({title, price, description, onAddToCart}) {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.pricingblockcontent}>
          <p className={classes.pricingplan}>{title}</p>
          <div className={classes.pricingnote}>{description}</div>
          <div className={classes.pricevalue}>
            <p>${price}</p>
          </div>
        </div>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </>
  );
}
