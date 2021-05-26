const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home/Index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About/Index.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/pages/Resume/Index.vue')
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: () => import('@/pages/Respositories/Index.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact/Index.vue')
  }
]

export default routes