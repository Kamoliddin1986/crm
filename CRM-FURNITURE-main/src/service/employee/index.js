import axios from "../axios";

export const useEmployee = {
    create: (newEmployee) => axios.post("/employees/registration",newEmployee,{
        headers: {
           "Authorization": `Bearer ${localStorage.getItem('token')}` 
        }
    }),
    getByPage: () => axios.get('/employees/get', {
        headers: {
           "Authorization": `Bearer ${localStorage.getItem('token')}` 
        }
    })
}