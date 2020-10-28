import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} =useParams();
    const [product, setProduct] = useState({});
    const [loading,setLoading] = useState(true);
    document.title = 'product details'
    useEffect(() => {
        fetch('https://morning-oasis-97097.herokuapp.com/product/' + productKey)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            setLoading(false)});
    },[productKey])
    console.log(product)
    
    return (
        <div>
            <h1>product  details is here</h1>
            {
                loading ?<p>loading....</p> :
                <Product showAddToCart={false} product={product}></Product>
            }
            
        </div>   
    );
};

export default ProductDetail;