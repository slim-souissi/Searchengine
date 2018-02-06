import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GalleryServices{
  constructor(private http:Http){

  }

  search(motCle:string,size:number,page:number){
    return this.http.get("https://pixabay.com/api/?key=7707524-a4aed8f34a6ea79855843c1cd&q="+motCle+"&per_page="+size+"&page="+page)
      .map(resp=>
        resp.json())
  }
}
