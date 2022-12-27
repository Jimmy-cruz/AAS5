import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
  resultado = 0;
  operador!:string;
  // sumar(){
  //   resultado = n1+n2;
  //   this.operador = "+";

  // }
  // restar(){
  //   resultado = n1-n2;
  //   this.operador = "-";
  // }
  // multiplicar(){
  //   resultado = n1*n2;
  //   this.operador = "*";
  // }
  // dividir(){
  //   resultado = n1/n2;
  //   this.operador = "/";
  // }
}
