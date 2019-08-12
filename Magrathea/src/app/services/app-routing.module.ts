import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from '../pages/principal/principal.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: '', component: PrincipalComponent },
        ]
    },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }