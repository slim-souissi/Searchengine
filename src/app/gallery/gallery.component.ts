import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import * as url from 'url';
import "rxjs/add/operator/map";
import {GalleryServices} from '../../service/gallery.services';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos:any;
  currentPage:number=1;
  size:number=5;
  totalPages:number;
  motCle:string="";
  pages:Array<number>=[];
  constructor(private galleryservices:GalleryServices) { }

  ngOnInit() {}

  onSearch(dataForm){
    this.galleryservices.search(dataForm.motCle,this.size,this.currentPage)
      .subscribe(data=>{
        this.pagePhotos=data;
        this.totalPages=data.totalHits/this.size;
        if(data.totalHits%this.size != 0) ++this.totalPages;
        this.pages=new Array(this.totalPages);
      },err=>{
          console.log(err);
  })
  }
  goToPage(i){
    this.currentPage=i+1;
    this.onSearch({motCle:this.motCle});
  }
}
