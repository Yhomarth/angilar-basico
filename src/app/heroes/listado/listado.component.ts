import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes : string[] = ['Hulk', 'Thor', 'Capitan America', 'Ironman', 'Spiderman'];

  heroeBorrado : string= '';


  borrarHeroes() :void{
      this.heroeBorrado = this.heroes.shift() || '';
  }




}
