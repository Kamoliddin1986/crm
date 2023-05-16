import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/employee',
          name: 'employee',
          component: () => import('../views/Employee/Employees.vue'),
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem('role_id') !=='3'){
              next({name: 'error'})
            }else{
              next()
            }
          }
        },
        {
          path: '/types',
          name: 'product-types',
          component: () => import('../views/Product/ProductType.vue'),
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem('role_id')==3) {
              next();
            } else {
                next({name: "error"});
            }
        }
        },
        {
          path: '/product',
          name: 'product',
          component: () => import('../views/Product/Product.vue'),
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem('role_id')==3 || localStorage.getItem('role_id') == 2 ) {
              next();
            } else {
                next({name: "error"});
            }
        }
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('../views/Order/Orders.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../views/Contact/Contact.vue'),
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem('role_id') == 3 && localStorage.getItem('role_id') == 4 ) {
              next();
            } else {
                next({name: "error"});
            }
        }
        },
        {
          path: '/region',
          name: 'region',
          component: () => import('../views/Region/Region.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error/Error.vue')
    }
  ]
})

export default router
