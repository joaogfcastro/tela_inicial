import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'cliente',
    loadComponent: () => import('./pages/cliente/cliente.page').then( m => m.ClientePage)
  },
  {
    path: 'cliente',
    loadComponent: () => import('./pages/cliente/cliente.page').then( m => m.ClientePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/cliente/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/cliente/cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'funcionario',
    loadComponent: () => import('./pages/funcionario/funcionario.page').then( m => m.FuncionarioPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/funcionario/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/funcionario/cadastro/cadastro.page').then( m => m.CadastroPage)
  }
];

