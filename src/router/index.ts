import { createRouter, createWebHistory } from 'vue-router';
import Counter1Page from '@/counter/pages/Counter1Page.vue';
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue';
import ClientsLayout from '@/client/layout/ClientLayout.vue';
import ListPage from '@/client/pages/ListPage.vue';
import ClientsPage from '@/client/pages/ClientsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: Counter1Page
    },
    {
      path: '/counter-2',
      name: 'counter-2',
      component: CounterSetupPage
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      redirect: { name: 'list' },
      children: [
        { path: 'list', name: 'list', component: ListPage },
        { path: ':id', name: 'client-id', component: ClientsPage },
      ]
    }
  ]
});

export default router;
