import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuLinksComponent } from './menu-links/menu-links.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
//import { MatIconModule} from '@angular/material/icon';
//import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuLinksComponent,
    HeaderTextComponent,
    MySkillsComponent,
    MyWorkComponent,
    AboutMeComponent,
    ContactComponent,
    ImprintComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    //MatButtonModule
    //MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
