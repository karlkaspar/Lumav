import * as React from 'react'
import { deleteProduct } from '../../api/api'
import productsFromFile from '../../products.json'

const ProductsList = ({ incrementProductCount }) => {
    const productsGrid = productsFromFile.map((item, i) =>

        <div className='product'>
            <div className='imgContainer'><img src={item.img} alt={item.name} /></div>
            <div>{item.name}</div>
            <div>{item.price} €</div>
            <div><button onClick={() => incrementProductCount()}>To Cart</button></div>
            <div className='deleteBtn' onClick={() => deleteProduct(item.id)}>x</div>
        </div>
    )
    // € from .env file
    return <div className='products-list'>{productsGrid}</div>
}

export default ProductsList