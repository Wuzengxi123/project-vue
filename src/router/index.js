import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from "./myVueRoute";
import HelloWorld from '@/components/HelloWorld'
import About from "@/components/About.vue";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: "About",
      component: About
    }
  ]
})

