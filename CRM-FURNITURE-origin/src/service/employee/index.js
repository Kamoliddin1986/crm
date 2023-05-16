import axios from "../axios";

export const useEmployee = {
    create: (newEmployee) => axios.post("/employees/registration",newEmployee,{
        headers: {
           "Authorization": `Bearer ${localStorage.getItem('token')}` 
        }
    }),
    getAll: () => axios.get('/employees/get', {
        headers: {
           "Authorization": `Bearer ${localStorage.getItem('token')}` 
        }
    }),

    getByPage: (page) => axios.get(`/employees/get/page/${page}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}` 
         }
    })
}