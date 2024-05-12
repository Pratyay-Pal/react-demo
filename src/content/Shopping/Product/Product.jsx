import Card from '../UI/ShopCard/ShopCard';

export default function Product({productItem}){
    return(<>
    <Card id={productItem.id} title={productItem.title} price={productItem.price} description={productItem.description}></Card>
    </>);
}