import Product from "../Product/Product";
import classes from "./Shop.module.css";

export default function Shop({ products, onAddToCart }) {
  return (
    <>
      <div className={classes.shopcontainer}>
        <ol>
          {products.map((product) => (
            <li key={product.id}>
              <Product productItem={product} onAddToCart={() => onAddToCart(product)}></Product>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
