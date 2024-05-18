import { createRouter, createWebHistory } from 'vue-router';
import Login from './../views/Login.vue';
import ResetPassword from './../views/ResetPassword.vue';
import Dashboard from './../views/Dashboard.vue';


const routes = [{
    path: '/',
    name: 'Login',
    component: Login
}, {
    path: '/reset-password',
    name: 'Reset Password',
    component: ResetPassword
}, {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
}]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
        const user = localStorage.getItem('user');
        if (user) {
            next()
        } else {
            next('/')
        }
    } else {
        next()
    }
})


export default router;