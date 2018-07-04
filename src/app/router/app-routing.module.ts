import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../components/home/home.component";
import { ComponentsComponent } from "../components/components/components.component";
import { CdkComponent } from "../components/cdk/cdk.component";
import { GuidesComponent } from "../components/guides/guides.component";
import { MenuComponent } from "../components/menu/menu.component";
import { SidenavComponent } from "../components/sidenav/sidenav.component";
import { CardComponent } from "../components/card/card.component";
import { DividerComponent } from "../components/divider/divider.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'sidenav',
        component: SidenavComponent
      },
      {
        path: 'card',
        component: CardComponent
      },
      {
        path: 'divider',
        component: DividerComponent
      },
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'cdk',
    component: CdkComponent
  },
  {
    path: 'guides',
    component: GuidesComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }