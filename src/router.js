import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // {
    //   path: "/cv",
    //   name: "cv",
    //   component: () => import("./views/CV.vue")
    // },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/Work.vue')
    },
    {
      path: '/work/:slug',
      name: 'workItem',
      component: () => import('./components/Work/WorkDetail.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue')
    },
    {
      name: 'post',
      // path: '/blog/:url',
      path: '/blog/:slug',
      component: () => import('./components/Blog/BlogPostDetail.vue')
    }
  ]
});
