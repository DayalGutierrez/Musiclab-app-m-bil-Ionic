import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../api/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {
  comments = []
  constructor(private commentsService:CommentsService, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('albumId');
      this.commentsService.getComentarios(recipeId);
    });
    this.commentsService.comments.subscribe(comments => {
      this.comments = comments;
    })
  }

}
