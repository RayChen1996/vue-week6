import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontLayout.vue"),
      children : [
        {
          path: "",
          name: "home",
          component: () => import("../views/front/HomeView.vue")    
        },
        {
          path: "about",
          name: "about",      
          component: () => import("../views/front/AboutView.vue")
        },
        {
          path: "products",
          name: "products",      
          component: () => import("../views/front/ProductsView.vue")
        },
        {
          path: "product/:id",
          name: "product",      
          component: () => import("../views/front/ProductView.vue")
        },
        {
          path: "cart",
          name: "cart",      
          component: () => import("../views/front/CartView.vue")
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: "/products"
    },
  ],
});

export default router;
