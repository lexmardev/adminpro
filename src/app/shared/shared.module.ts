import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NotfoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  exports: [
    NotfoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})

export class SharedModule { }
