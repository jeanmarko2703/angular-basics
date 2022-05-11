import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

    heroes: string[]=['spiderman','ironman','hulk','thor','capitan america'];
    heroeBorrado:string='...'
    borrarHeroe(){
      
      var remove= this.heroes.pop();
      
      this.heroeBorrado=remove ||'...';
    }

}
