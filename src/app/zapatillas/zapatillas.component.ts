import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService], //servicio
})
export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de Tenis";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: String;
    public miMarca: String;

    constructor(
        //servicio
        private _ZapatillaService: ZapatillaService
    ){
        this.miMarca = "Fila";
        this.color = 'blue';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Nike Air Max', 'Nike', 'Blanco', 75, true),
            new Zapatilla('Nike Jordan', 'Nike', 'Rojo', 180, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('Reebook Spartan', 'Reebook', 'Negro', 180, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 60, false)
        ];
    }

    ngOnInit() {
        //servicio
        this.zapatillas = this._ZapatillaService.getZapatillas();
        alert(this._ZapatillaService.getTexto());

        console.log(this.zapatillas);

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
            console.log(index);            
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.miMarca);
    }

    addMarca(){
        this.marcas.push(this.miMarca);
    }

    borrarMarca(index:any){
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur(){
        console.log("Haz salido del input.");
    }
    mostrarPalabra(){
        alert(this.miMarca);
    }
}