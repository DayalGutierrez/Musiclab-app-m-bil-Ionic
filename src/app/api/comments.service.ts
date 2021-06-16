import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments = new Subject<any[]>();
  constructor(private http: HttpClient) { }

  getComentarios(id){
    this.http.get<any[]>("/music/api/v1/comentarios/"+id)
    .subscribe(data => {
      this.comments.next(data);
    });
  }
}
