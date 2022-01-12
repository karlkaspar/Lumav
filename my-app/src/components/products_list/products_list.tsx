import * as React from 'react';
import productsFromFile from '../../products.json';

const ProductsList = ({ incrementProductCount }) => {
    const productsGrid = productsFromFile.map((item, i) =>

        <div className="product">
            <div><img src={item.img} alt={item.name} /></div>
            <div>{item.name}</div>
            <div>{item.price} €</div>
            <div><button onClick={() => incrementProductCount()}>To Cart</button></div>
        </div>
    )
    // € from .env file
    return <div className='products-list'>{productsGrid}</div>
};

const addToCart = (id: Number, e: any) => {
    console.log(addToCart, id)
}

export default ProductsList