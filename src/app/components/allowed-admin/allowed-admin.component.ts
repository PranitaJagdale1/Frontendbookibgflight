import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-allowed-admin',
  templateUrl: './allowed-admin.component.html',
  styleUrls: ['./allowed-admin.component.css']
})
export class AllowedAdminComponent implements OnInit {

  
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

  //this.doctorService.getAllDoctors().subscribe(data=>{
    //this.doctors=data;
 // },
  
  //error=>{
    //this.errorMsg='Could not load Doctors. Try refreshing or contact administractor'
 // }
 // );
  }

  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.loggedIn = false;
  }

  //showAppointment(){
    //this.patientArry = this.patients;
  //}

}
