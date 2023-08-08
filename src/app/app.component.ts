import { Component } from '@angular/core';
import { User } from './user';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  departments : any = ["CS","IT","ECE","EEE","ME","CE","HR"];
  userModel = new User('','','','','','',false);
  submitted = false;
  errMessage = '';
  constructor(private userService : UserServiceService) { }
  onSubmit(){
    this.submitted = true;
    this.userService.addUser(this.userModel)
    .subscribe(
      data => console.log(data),
      error => this.errMessage = error.statusText
    );
  }
}
