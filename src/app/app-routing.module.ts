import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tracks/:albumId',
    loadChildren: () => import('./tracks/tracks.module').then( m => m.TracksPageModule)
  },
  {
    path: 'artist/:artistaId',
    loadChildren: () => import('./artist/artist.module').then( m => m.ArtistPageModule)
  },
  {
    path: 'comment/:albumId',
    loadChildren: () => import('./comment/comment.module').then( m => m.CommentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
