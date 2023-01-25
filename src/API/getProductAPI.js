const getProductList = () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .catch(e => Error(e))
}
export { getProductList };