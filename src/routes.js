import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const HomePage = () => import(/* webpack-chunk-name: 'HomePage' */ './components/pages/HomePage.vue');
const CartPage = () => import(/* webpack-chunk-name: 'CartPage' */ './components/pages/CartPage.vue');
const ProductPage = () => import(/* webpack-chunk-name: 'ProductPage' */ './components/pages/ProductPage.vue');
const CheckoutPage = () => import(/* webpack-chunk-name: 'CheckoutPage' */ './components/pages/CheckoutPage.vue');
const SinglePage = () => import(/* webpack-chunk-name: 'SinglePage' */ './components/pages/SinglePage.vue');
const SearchPage = () => import(/* webpack-chunk-name: 'SearchPage' */ './components/pages/SearchPage.vue');

export default new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomePage,
        },
        {
            name: 'product',
            path: '/product',
            component: ProductPage,
        },
        {
            name: 'search-page',
            path: '/search-page',
            component: SearchPage,
        },
        {
            name: 'single-page',
            path: '/single-page',
            component: SinglePage,
        },
        {
            name: 'checkout',
            path: '/checkout',
            component: CheckoutPage,
        },
        {
            name: 'cart',
            path: '/cart',
            component: CartPage,
        }
    ],
    mode: 'history',
});