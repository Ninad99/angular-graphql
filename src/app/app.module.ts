import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { ListItemDetailComponent } from './components/list-item-detail/list-item-detail.component';
import { LandingComponent } from './components/landing/landing.component';

import { RelativeTimePipe } from './relative-time/relative-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    ListItemDetailComponent,
    LandingComponent,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
