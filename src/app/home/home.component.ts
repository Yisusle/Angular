import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public identificadoIf: boolean;
  public identificadoThen: boolean;

  constructor(){
    this.identificadoIf = false;
    this.identificadoThen = false;
  }

  ngOnInit() {
    
  }

  setIdentificadoIf(){
    this.identificadoIf = true;
  }

  unSetIdentificadoIf(){
    this.identificadoIf = false;
  }

  setIdentificadoThen(){
    this.identificadoThen = true;
  }

  unSetIdentificadoThen(){
    this.identificadoThen = false;
  }
}
