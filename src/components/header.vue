import { createRouter, createWebHistory } from 'vue-router';
import ConcertList from '../pages/ConcertList.vue';
import ConcertDetail from '../pages/ConcertDetail.vue';

const routes = [
  { path: '/', component: ConcertList },
  { path: '/concerts/:id', component: ConcertDetail }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});