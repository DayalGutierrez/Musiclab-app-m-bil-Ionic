import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../api/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
})
export class TracksPage implements OnInit {
  tracks = []
  constructor(private tracksService: TracksService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('albumId')
      this.tracksService.getTracks(recipeId);
    });
    this.tracksService.tracks.subscribe(tracks => {
      this.tracks = tracks;
    });
  }

}
