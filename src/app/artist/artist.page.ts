import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistaService } from '../api/artista.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage implements OnInit {
  artistas = []
  constructor(private artistasService: ArtistaService, private activatedRoute: ActivatedRoute) { }
  /*activatedRoute es para poder obtener el id del url que es mandado desde el home*/
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('artistaId');
      this.artistasService.getArtistas(recipeId);
    });
    this.artistasService.artistas.subscribe(artistas => {
      this.artistas = artistas;
    });
  }

}
