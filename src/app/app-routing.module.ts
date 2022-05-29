import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SelfViewComponent } from './components/self-view/self-view.component';

const routes: Routes = [
  {path:'self-view',component:SelfViewComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'self-view',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
