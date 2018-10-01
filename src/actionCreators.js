const addProduct = (prod) => {
    return {
        type: 'ADD_PROD',
        product: prod
    };
}
const removeProduct = (prod) => {
    return {
        type: 'REMOVE_PROD',
        product: prod
    }
}

export { addProduct, removeProduct };