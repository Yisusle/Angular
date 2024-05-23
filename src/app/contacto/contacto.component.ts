import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;
  public show_data:any;
    constructor(){

      this.usuario= new ContactoUsuario('','','','');
  }

    ngOnInit() {
      
    }
    onSubmit(form:any){
      console.log("Evento submit lanzado.");
      this.show_data = this.usuario;
      console.log(this.usuario);
      console.log(this.show_data);
      //form.reset();
    }
  
}
