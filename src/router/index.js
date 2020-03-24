import Vue from 'vue';
import VueRouter from 'vue-router';


const Home = () => import('@/views/home/Home');
const Apply = () => import('@/views/apply/Apply');
const My = () => import('@/views/my/My');
const Shop = () => import('@/views/shop/Shop');
const Details = () => import('@/views/details/detail');
Vue.use(VueRouter);

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/apply',
		component: Apply
	},
	{
		path: '/my',
		component: My
	},
	{
		path: '/shop',
		component: Shop
	},
	{
		path: '/detail/:id',
		component: Details
	}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router