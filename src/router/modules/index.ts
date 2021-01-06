export default [
  {
    path: '/index',
    component: () => import('../../views/index/chats/chats.vue'),
    name: 'chats',
    meta: { title: '微信', icon: 'chats', affix: true }
  },
  {
    path: '/index/me',
    component: () => import('../../views/index/me/me.vue'),
    name: 'me',
    meta: { title: '我的', icon: 'me', affix: true }
  },
  {
    path: '/index/contacts',
    component: () => import('../../views/index/contacts/contacts.vue'),
    name: 'contacts',
    meta: { title: '通讯录', icon: 'contacts', affix: true }
  },
  {
    path: '/index/discover',
    component: () => import('../../views/index/discover/discover.vue'),
    name: 'discover',
    meta: { title: '朋友圈', icon: 'news', affix: true }
  },
]


