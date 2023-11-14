import Card from '../UI/ShopCard/ShopCard';
import classes from './Product.module.css'

export default function Product({productItem, onAddToCart}){
    return(<>
    <Card title={productItem.title} price={productItem.price} description={productItem.description} onAddToCart={onAddToCart}></Card>
    </>);
}