import { AlbumService } from './../services/album.service';
import { Albums } from './../models/picture.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-view',
  templateUrl: './picture-view.component.html',
  styleUrls: ['./picture-view.component.css']
})
export class PictureViewComponent implements OnInit {

  albums : Albums[];
  albumId = 1;

  constructor(private albumservice : AlbumService) { }

  getAlbum(){
    this.albumservice.getAlbum(this.albumId).subscribe(
      // Because the service returns an array of posts
      
      albums =>{     
        
        this.albums = albums;
        console.log(albums);
      } ,
      error => console.log(`Error: ${ error}`)
    );
    
  }
  ngOnInit() {
    console.log(this.albumId);
    this.getAlbum();
  }

}
