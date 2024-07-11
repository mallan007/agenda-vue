import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home', 
    component: HomeView // Implementar a página inicial (O certo seria: Header: Mecanismo de busca / Body: Nomedo contato / Footer: Botão Adicionar Contato, ou pôr no Header, mais fácil)
  },
  {
    path: '/detalhes-contato',
    name: 'detalhes-contato',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailsContactList.vue')
  },
  { // Acessível após evento de click na página Detalhes
    path: '/editar-contato',
    name: 'editar-contato',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditContactForm.vue')
  },
  { // Disponível já na página Inicial 
    path: '/adicionar-contato',
    name: 'adicionar-contato',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddContactForm.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router