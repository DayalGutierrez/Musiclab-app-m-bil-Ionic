import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  artistas = new Subject<any[]>();
  constructor(private http: HttpClient) {
  }

  getArtistas(id){
    this.http.get<any[]>("/music/api/v1/artistas/"+id)
    .subscribe(data => {
      this.artistas.next(data);
    });
  }
}
