import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './pages/component/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MagratheanAPIService } from './services/magrathean-api.service';
import { HomeComponent } from './pages/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatInputModule } from '@angular/material';
import { ConfigComponent } from './pages/config/config.component';
import { WifiComponent } from './pages/wifi/wifi.component';
import { TrendingComponent } from './pages/trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HomeComponent,
    ConfigComponent,
    WifiComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,    
    HttpClientModule,
    AngularFontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    MagratheanAPIService,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
