import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  tracks = new Subject<any[]>();
  constructor(private http: HttpClient) { }

  getTracks(id){
    this.http.get<any[]>("/music/api/v1/albumes/"+id)
    .subscribe(data => {
      this.tracks.next(data);
    });
  }
}
