import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit{
  
  public nombre: string;
  public followers: number = NaN;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){this.nombre = ""; }
  
  ngOnInit(){
    this._route.params.subscribe((params: Params) =>{
      //this.nombre = params.nombre;
      this.nombre = params['nombre'];
      //this.followers = +params['followers'];
      this.followers = +params['followers'];

      console.log(this.nombre);
      console.log(this.followers);

      console.log(typeof this.followers);

        if(this.nombre == 'ninguno'){
          this._router.navigate(['/home']);
        }
    });

  }
  
  redirigir(){
    this._router.navigate(['/tenis']);
  }

}

//ng generate component "nombre del componente" para crear un componente de forma automatica.
