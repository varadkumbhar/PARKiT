import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAPipe } from './reusable/pipes/na.pipe';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { ClientComponent } from './pages/client/client.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { ClientLayoutComponent } from './pages/client-layout/client-layout.component';
import { EntryGateComponent } from './pages/entry-gate/entry-gate.component';
import { EntryLayoutComponent } from './pages/entry-layout/entry-layout.component';
import { ExitGateComponent } from './pages/exit-gate/exit-gate.component';
import { ExitLayoutComponent } from './pages/exit-layout/exit-layout.component';
import { FloorsComponent } from './pages/floors/floors.component';
import { GateOperatorDashboardComponent } from './pages/gate-operator-dashboard/gate-operator-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ParkingComponent } from './pages/parking/parking.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CreateSiteComponent } from './pages/site/create-site/create-site.component';
import { SiteListComponent } from './pages/site/site-list/site-list.component';
import { UsersComponent } from './pages/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NAPipe,
    AdminDashboardComponent,
    AdminLayoutComponent,
    ClientComponent,
    ClientDashboardComponent,
    ClientLayoutComponent,
    EntryGateComponent,
    EntryLayoutComponent,
    ExitGateComponent,
    ExitLayoutComponent,
    FloorsComponent,
    GateOperatorDashboardComponent,

    ParkingComponent,
    ReportsComponent,
    CreateSiteComponent,
    SiteListComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
