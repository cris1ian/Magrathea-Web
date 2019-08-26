import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ConfigComponent } from '../pages/config/config.component';
import { WifiComponent } from '../pages/wifi/wifi.component';
import { TrendingComponent } from '../pages/trending/trending.component';
import { CultivoComponent } from '../pages/cultivo/cultivo.component';
import { DeveloperComponent } from '../pages/developer/developer.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: '', component: CultivoComponent },
            { path: 'config', component: ConfigComponent },
            { path: 'trending', component: TrendingComponent },
            { path: 'wifi', component: WifiComponent },
            { path: 'developer', component: DeveloperComponent }
        ]
    },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }