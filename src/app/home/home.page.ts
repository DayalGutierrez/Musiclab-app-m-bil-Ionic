import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../api/albums.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  albums = [    
  ];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(){
    this.albumsService.albums.subscribe(albums => {
      this.albums = albums;
    });
  }

  
}
