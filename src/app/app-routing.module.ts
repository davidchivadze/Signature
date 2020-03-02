import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSignatureComponent } from './Components/create-signature/create-signature.component';


const routes: Routes = [
  {path:"",component:CreateSignatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
