import { Component, OnInit } from '@angular/core';
import { peticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css',
  providers: [peticionesService],
})

export class ExternoComponent implements OnInit{
    public user: any;
    public userId: number;
    public fecha: any;

    public new_user: any;
    public usuario_guardado: any;

  constructor(
    private _peticionesService: peticionesService
  ){
    this.userId = 3;
    this.new_user = {
            "name": "",
            "job": ""
        };
  }

  ngOnInit(){
    this.cargaUsuario();
    this.fecha = new Date(2019, 5, 20);
  }

  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
          console.log(result);
          this.user = result.data;
      },
      error =>{
        console.log(<any>error);
      }
      
    );
  }

  onSubmit(form:any){
    this._peticionesService.addUser(this.new_user).subscribe(
      response =>{
        this.usuario_guardado = response;
        console.log(response);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
