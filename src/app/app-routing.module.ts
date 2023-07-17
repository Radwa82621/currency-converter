import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrencyComponent } from './currency/currency.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ConvertComponent } from './convert/convert.component';
import { ConvertByDateComponent } from './convert-by-date/convert-by-date.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent,title:"home",
children:[
  {path:'',component:ConvertComponent},

  {path:'convert',component:ConvertComponent},
  {path:'convertByDate',component:ConvertByDateComponent}
]},
  {path:'Currency',component:CurrencyComponent,title:"Currency"},
  {path:'about',component:AboutComponent,title:"about"},
  {path:'contact',component:ContactComponent,title:"contact"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
