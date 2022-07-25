import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Ant Man', 'Capitán América'];
  listadoHeroeBorrado: string[] = [];

  borrarHeroe() {
    const heroeBorrado = this.heroes.shift();
    if (heroeBorrado) {
      this.listadoHeroeBorrado.push(heroeBorrado);
    }
  }

}
