import IndexLayout from '@/layout/index.vue'
import index from './modules/index'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: IndexLayout,
    redirect: '/index',
    children:
      index
  },
  {
    path: '/chat',
    component: () => import('@/views/chat/chat.vue'),
    name: 'chat',
    meta: { title: '聊天界面', icon: 'chat', affix: true }
  },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


export default router