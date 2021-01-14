import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router';

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const FeatureView = () => import('../views/home/childComps/FeatureView')

const routes = [
	{
		path : "",
		redirect : "/home",
		meta: {
			title: "首页"
		}
	},
	{
		path : "/home",
		component : Home,
		meta: {
			title: "首页"
		},
		children :[
			{
				path : "featureView",
				component : FeatureView
			}
		]
	},
	{
		path : "/cart",
		component : Cart,
		meta: {
			title: "购物车"
		}
	},
	{
		path : "/category",
		component : Category,
		meta: {
			title: "分类"
		}
	},
	{
		path : "/profile",
		name : 'profile',
		component : Profile,
		alias : "/home33", //给他取别名
		meta: {
			title: "我的"
		},
		props: (route) => {
			return  route.query;
		}
}

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
		 document.title = to.matched[0].meta.title;
		 next();
})
export default router;
