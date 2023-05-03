import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/avatar';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvatarApiService {

  constructor(private http: HttpClient) { }

  getCharacters(perPage: number = 20, page: number = 1) {
    return this.http.get(`${environment.apiUrl}characters?perPage=${perPage}&page=${page}`);
  }

  getRandomCharacters(count: number = 20): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.apiUrl}characters/random?count=${count}`);
  }

  getCharactersForMemory(count: number = 20): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.apiUrl}characters/random?count=${count}`).pipe(
      map(response => response.map(char => [char, char]).flat().map((char, i) => { return { ...char, index: i, hidden: true, color: this.getColor(char.affiliation) } }).sort(() => Math.random() - 0.5))
    );
  }

  getColor(affiliation: string) {
    let color = 'primary';
    if (!affiliation) return color;
    let colors = ["fire", "air", "earth", "water"];
    let arr = affiliation.toLowerCase().split(' ');
    colors.forEach(col => {
      if (arr.includes(col)) color = col;
    }
    )
    return color;
  }
}
