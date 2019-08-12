import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ConfigComponent } from './pages/config/config.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '/config', component: ConfigComponent },
  // { path: '**', component: HomeComponent }
];

// export const routes: Routes = [
//   {
//     path: 'home',
//     component: HomeComponent,
//     children: [
//       { path: 'principal', component: PrincipalComponent },
//       { path: 'config', component: ConfigComponent },
//       { path: '', redirectTo: 'principal', pathMatch: 'full' },
//     ]
//   },
//   { path: '', redirectTo: '/principal', pathMatch: 'full' },
//   { path: '**', component: HomeComponent }
// ];

export class AppRoutingModule { }
