import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutsComponent } from './pages/abouts/abouts.component';
import { NotFoundwComponent } from './pages/not-foundw/not-foundw.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'abouts', component: AboutsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: '**', component: NotFoundwComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
