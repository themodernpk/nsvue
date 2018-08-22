import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import AjaxListView from '../components/AjaxListView';

const router = new VueRouter({
  pageRouting: true,
  routes: [

    {
        path: '/ajax-list-view',
        component: AjaxListView,
        meta: {
            title: 'Ajax List View',
        },
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },

    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
