import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { EventoComponent } from "./pages/evento/evento.component";
import { HeaderComponent } from "./pages/header/header.component";
import { LayoutComponent } from "./pages/layout/layout.component";
import { LocalComponent } from "./pages/local/local.component";
import { PalestrantesComponent } from "./pages/palestrantes/palestrantes.component";
import { ParceriasComponent } from "./pages/parcerias/parcerias.component";
import { PatrocinioComponent } from "./pages/patrocinio/patrocinio.component";
import { ProgramacaoComponent } from "./pages/programacao/programacao.component";
import { VoluntariosComponent } from "./pages/voluntarios/voluntarios.component";
import { MaterialModule } from "./shared/material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    EventoComponent,
    PalestrantesComponent,
    ParceriasComponent,
    FooterComponent,
    VoluntariosComponent,
    LocalComponent,
    PatrocinioComponent,
    ProgramacaoComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    CarouselModule,
    ButtonModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
