import React from 'react'
import { useEffect, useState } from 'react';
import { getProductList } from '../../API/getProductAPI'
import ProductRenderer from './ProductRenderer'

const GetAllProducts = () => {
    const [totalProduct, setTotalProduct] = useState()
    useEffect(() => {
        return () => {
            getProductList()
                .then(res => setTotalProduct(res))
        }
    }, [])

    return (
        <div><ProductRenderer totalProduct={totalProduct} /></div>
    )
}

export default GetAllProducts