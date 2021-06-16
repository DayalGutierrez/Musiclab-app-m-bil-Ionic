import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albums = new Subject<any[]>();
  constructor(private http: HttpClient) {
    this.getAlbums();
  }

  getAlbums(){
    this.http.get<any[]>("/music/api/v1/albumes")
    .subscribe(data => {
      this.albums.next(data);
    })
  }
}


