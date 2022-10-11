import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-alloweduser',
  templateUrl: './alloweduser.component.html',
  styleUrls: ['./alloweduser.component.css']
})
export class AlloweduserComponent implements OnInit {

 
  errorMsg:string;
 
  count: number;
  username: string;
  loggedIn: boolean;
  

  constructor( private appService: AppService) { }

  ngOnInit(): void {

    this.appService.loggedIn.subscribe(data=>{

      let status = localStorage.getItem('isLoggedIn');
        if(status){
            this.loggedIn = true;
            let token = localStorage.getItem('token');
            token = atob(token);
            console.log(token);
            this.username = token.split(":")[0];
        }
        else{
            this.loggedIn = false;
        }
  });

 
  }

  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.loggedIn = false;
  }

  
}
