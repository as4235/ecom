import React from 'react'
import { useEffect } from 'react';

const ProductRenderer = (props) => {
    useEffect(() => {
        return () => {
            console.log("props", props)
        }
    }, [props])
    return (
        <div>ProductRenderer</div>
    )
}

export default ProductRenderer