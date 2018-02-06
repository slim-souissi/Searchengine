import {Injectable} from '@angular/core';
@Injectable( )
export  class AboutService{
  infos={
    nom:"med",
    email:"lll@ggg.com",
    tel:97970768
  };
  comments=[
    {date:new Date(),message  :"A"},
    {date:new Date(),message  :"B"},
    {date:new Date(),message  :"C"}
  ];
  commentaire={date:null ,message:""};

  addcomment(c){
    c.date=new Date();
    this.comments.push(c);

  }

  getallComments(){
    return this.comments;
  }
  getInfo(){
    return this.infos;
  }

}
