import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  private API_EPISODIOS = "https://rickandmortyapi.com/api/episode";

  constructor(private http: HttpClient) { }

  public getAllEpisodios(): Observable<any>{
    return this.http.get(this.API_EPISODIOS);
  }
}
