import { bootstrapApplication } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./app/home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'cliente',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./app/pages/cliente/login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'cadastro',
        loadComponent: () =>
          import('./app/pages/cliente/cadastro/cadastro.page').then((m) => m.CadastroPage),
      },
    ],
  },

  {
    path: 'funcionario',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./app/pages/funcionario/login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'cadastro',
        loadComponent: () =>
          import('./app/pages/funcionario/cadastro/cadastro.page').then((m) => m.CadastroPage),
      },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideIonicAngular(), provideRouter(routes)],
});
