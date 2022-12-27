import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BotonesComponent } from './body/botones/botones.component';
import { InputsComponent } from './body/inputs/inputs.component';
import { ResultadoComponent } from './body/resultado/resultado.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    BodyComponent,
    BotonesComponent,
    InputsComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
