import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }


  getAllCharacters() {
    return this.http.get('https://rickandmortyapi.com/api/character').toPromise();
  }

}
