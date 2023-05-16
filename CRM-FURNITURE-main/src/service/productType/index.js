import axios from "../axios";

export const useProductType = {
    create: (newProductType) => axios.post("/product-types",newProductType,{
        headers: {
           "Authorization": `Bearer ${localStorage.getItem('token')}` 
        }
    }),
    getAll: () => axios.get('/product-types', {
        headers: {
           "Authorization": `Bearer ${localStorage.getItem('token')}` 
        }
    })
}