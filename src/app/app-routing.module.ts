import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
   path:'',
   redirectTo:'home',
   pathMatch:'full'

  },
  {path : 'post-details', component : PostDetailsComponent},
  {path : 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostDetailsComponent,]