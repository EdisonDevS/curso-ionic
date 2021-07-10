import { CharactersService } from './../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  personajes;

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  async cargarPersonajes() {
    this.personajes = await this.charactersService.getAllCharacters();
  }

}
