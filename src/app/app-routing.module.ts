import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./pages/layout/layout.component";
import { ProgramacaoComponent } from "./pages/programacao/programacao.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    data: { title: "Devfest Fortaleza • Início" },
  },
  {
    path: "programacao",
    component: ProgramacaoComponent,
    data: { title: "Devfest Fortaleza • Programação" },
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
