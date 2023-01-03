import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { ClientLayoutComponent } from './pages/client-layout/client-layout.component';
import { ClientComponent } from './pages/client/client.component';
import { EntryLayoutComponent } from './pages/entry-layout/entry-layout.component';
import { ExitLayoutComponent } from './pages/exit-layout/exit-layout.component';
import { FloorsComponent } from './pages/floors/floors.component';
import { LoginComponent } from './pages/login/login.component';
import { ParkingComponent } from './pages/parking/parking.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CreateSiteComponent } from './pages/site/create-site/create-site.component';
import { SiteListComponent } from './pages/site/site-list/site-list.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthGuard } from './reusable/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: ClientLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },
      // {
      //   path: 'client-dashboard',
      //   component: ClientDashboardComponent,
      // },
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'site-list',
        component: SiteListComponent,
      },
      {
        path: 'createSite',
        component: CreateSiteComponent,
      },
      {
        path: 'floors',
        component: FloorsComponent,
      },
      {
        path: 'parking',
        component: ParkingComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },

    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'admin-client',
        component: ClientComponent,
      },
      {
        path: 'admin-site-list',
        component: SiteListComponent,
      },
      {
        path: 'admin-floors',
        component: FloorsComponent,
      },
      {
        path: 'admin-users',
        component: UsersComponent,
      },
      {
        path: 'admin-client-dashboard',
        component: ClientDashboardComponent,
      },
      {
        path: 'admin-reports',
        component: ReportsComponent,
      },
      {
        path: 'admin-parking',
        component: ParkingComponent,
      },

    ]
  },
  {
    path: '',
    component: EntryLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'entry-parking',
        component: ParkingComponent
      }

    ]
  },
  {
    path: '',
    component: ExitLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'exit-parking',
        component: ParkingComponent
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
