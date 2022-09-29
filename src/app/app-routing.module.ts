import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { DetailedPostComponent } from './components/detailed-post/detailed-post.component';

const routes: Routes = [
  {
    path: 'home',
    component: ContentComponent,
  },
  {
    path: 'post/:id',
    component: DetailedPostComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
