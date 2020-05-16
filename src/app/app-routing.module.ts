import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { NewsComponent } from './news/news.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' }, 
  { path: 'tabs', component: TabsComponent },
  { path: 'headlines', component: TopHeadlinesComponent },
  { path: 'news', component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
