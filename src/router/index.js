import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'episodes',
      component: () => import('../views/Episodes.vue')
    },
    {
      path: "/infoepisode/:id",
      name: "InfoEpisode",
      component: () => import("../views/InfoEpisode.vue"),
    },
    {
      path: '/Locations',
      name: 'locations',
      component: () => import('../views/Locations.vue')
    },
    {
      path: "/infoLocation/:id",
      name: "InfoLocation",
      component: () => import("../views/InfoLocation.vue"),
    },
    {
      path: '/infoPerso/:id',
      name: 'infoPerso',
      component: () => import('../views/InfoPerso.vue')
    },
  ]
})

export default router
