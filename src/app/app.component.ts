import { Component ,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  name = 'Angular';
response:any;
user_response:any={};
login:string;
id:any;
avatar_url:any;
  constructor(private http: HttpClient){

  }
  ngOnInit(){
    this.http.get('https://api.github.com/users').subscribe(data=>{
this.response=data;
console.log(this.response);
    });
  }
  getUser(user){
    console.log(user);
   this.login=user.login;
    this.id =user.id;
  this.avatar_url=user.avatar_url;
  }
getName(){
  if(this.login !=""){
  this.response=this.response.filter(res=>{
    console.log(res);
    return res.login.toLowerCase().match(this.login.toLowerCase());
  })
}
else if( this.login ==""){
this.ngOnInit();
}

}
}
