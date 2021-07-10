import { CharactersRoutingModule } from './characters-routing.module';
;
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CharacterDetailComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule
  ]
})
export class CharactersModule { }
