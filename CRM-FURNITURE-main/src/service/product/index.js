import axios from "../axios";

export const useProduct = {
    create: (newProduct) => axios.post("/products",newProduct,{
        headers: {
           "Authorization": `Bearer ${localStorage.getItem('token')}` 
        }
    }),
    getAll: () => axios.get('/products', {
        headers: {
           "Authorization": `Bearer ${localStorage.getItem('token')}` 
        }
    })
}