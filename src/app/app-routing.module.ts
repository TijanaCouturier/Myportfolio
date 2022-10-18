import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { ImprintComponent } from './imprint/imprint.component';

//Kontrollieren
const routes: Routes = [
 { path: 'header-text', component: HeaderTextComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
