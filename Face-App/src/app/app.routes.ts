import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},

    {
    path: '',
    loadComponent: () =>
      import('./core/home/home.component')
        .then(c => c.HomeComponent)
    },

    {
      path: 'login',
      loadComponent: () =>
        import('./features/login/login.component')
          .then(c => c.LoginComponent)
    },

    {
      path: 'register',
      loadComponent: () =>
        import('./features/register/register.component')
          .then(c => c.RegisterComponent)
    },

    {
      path: 'face-recognition',
      loadComponent: () =>
        import('./features/camera-capture/camera-capture.component')
          .then(c => c.CameraCaptureComponent)
    },

];
