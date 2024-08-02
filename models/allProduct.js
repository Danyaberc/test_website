const items = [
    {id: 1, name: 'Xiaomi 7', price: 20*100},
    {id: 2, name: 'Xiaomi 8', price: 40*100},
    {id: 3, name: 'Xiaomi 9', price: 30*100},
    {id: 4, name: 'Xiaomi 10', price: 20*100},
    {id: 5, name: 'Xiaomi 11', price: 30*100},
    {id: 6, name: 'Xiaomi 12', price: 20*100},
    {id: 7, name: 'Xiaomi 13', price: 70*100},
    {id: 8, name: 'Xiaomi 13pro', price: 50*100},
    {id: 9, name: 'Xiaomi 14', price: 60*100},
    {id: 10, name: 'Xiaomi 14 pro', price: 20*100},
    {id: 11, name: 'Xiaomi 15', price: 40*100},
    {id: 12, name: 'Xiaomi 15 pro', price: 30*100},
]

const findAllProd = () =>{
    return items
} 

const findAllProdById = (id) =>{
    return items.find(item => item.id === id)
}

export { findAllProd, findAllProdById }