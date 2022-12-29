import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  
  // @Output 
  @Output() resultadoH = new EventEmitter<number>();

  operador = "+"
  txtn1 = 0;
  txtn2 = 0;
  resultado=0;

  sumar(){
    this.resultado = this.txtn1 + this.txtn2;
    this.resultadoH.emit(this.resultado);
    this.operador = "+";

    //no encuentro el error porque no obtengo los datos de los inputs :c
    console.log(this.resultado);
    console.log(this.txtn1);
    console.log(this.txtn2);
    
  }
  restar(){
    this.resultado = this.txtn1 - this.txtn2;
    this.operador = "-";
    this.resultadoH.emit(this.resultado);
  }
  multiplicar(){
    this.resultado = this.txtn1 * this.txtn2;
    this.operador = "*";
    this.resultadoH.emit(this.resultado);
  }
  dividir(){
    this.resultado = this.txtn1 / this.txtn2;
    this.operador = "/";
    this.resultadoH.emit(this.resultado);
  }

}
