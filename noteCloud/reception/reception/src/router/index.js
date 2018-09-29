import Vue from 'vue'
import Router from 'vue-router'
import NPropress from 'nprogress'
Vue.use(Router);

const components={
  login:()=>import('../views/login/login'),
  layout:()=>import('../views/layout/layout'),
  reg:()=>import('../views/register/register'),
  list:()=>import('../myComponents/airtcleItem'),
  write:()=>import('../views/writenote/writenote'),
  detail:()=>import('../views/details')
}

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: components.layout,
      redirect:"/login",
      children:[
        {
          path:"login",
          component:components.login,
        },
        {
          path:"reg",
          component:components.reg,
        },
        {
          path:"list",
          components:components.list,
          meta:{
            title:'文章列表页'
          }
        },
        {
          path:"write",
          component:components.write,
          meta:{
            title:"写笔记"
          }
        },
        {
          path:'detail',
          component:components.detail,
          meta:{
            title:"文章详情"
          }
        }
      ]
    }
  ]
});
router.beforeEach((to,from,next)=>{
  NPropress.start();
  next();
});
router.afterEach((to,from)=>{
  NPropress.done();
})
export default  router;
