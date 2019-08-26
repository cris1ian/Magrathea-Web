import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './pages/component/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { AmazingTimePickerModule } from 'amazing-time-picker'; 
// import { Papa } from 'ngx-papaparse';
import { MagratheanAPIService } from './services/magrathean-api.service';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ConfigComponent } from './pages/config/config.component';
import { WifiComponent } from './pages/wifi/wifi.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { CultivoComponent } from './pages/cultivo/cultivo.component';
import { DeveloperComponent } from './pages/developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent,
    WifiComponent,
    TrendingComponent,
    CultivoComponent,
    DeveloperComponent
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
    MatInputModule,
    AmazingTimePickerModule,
    // Papa
  ],
  providers: [
    MagratheanAPIService,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
