import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    public zapatillas:Array <Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Por medio de servicio', 'Por medio de servicio', 'Por medio de servicio', 0, true),
            new Zapatilla('Nike Air Max', 'Nike', 'Blanco', 75, true),
            new Zapatilla('Nike Jordan', 'Nike', 'Rojo', 180, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('Reebook Spartan', 'Reebook', 'Negro', 180, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 60, false)
        ];
    }

    getTexto(){
        return "Hola Mundo desde un Servicio.";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }

}