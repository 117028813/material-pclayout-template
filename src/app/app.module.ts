import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatSidenavModule, MatCheckboxModule, MatRadioModule, MatListModule, MatExpansionModule } from "@angular/material";
import { AppRoutingModule } from './router/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsComponent } from './components/components/components.component';
import { CdkComponent } from './components/cdk/cdk.component';
import { GuidesComponent } from './components/guides/guides.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardComponent } from './components/card/card.component';
import { DividerComponent } from './components/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentsComponent,
    CdkComponent,
    GuidesComponent,
    MenuComponent,
    SidenavComponent,
    CardComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
