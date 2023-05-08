import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../../State/user/user.service';
import { LoaderService } from '../../Services/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly userService: UserStateService, private loaderService:LoaderService) { }

  ngOnInit(): void {
  }

  getUser(){
    this.userService.User_State.subscribe(x=>{
      console.log(x);      
    });   
  }

  adduser(){
    this.userService.addUser();
  }

  setStateData(){
    this.userService.setData();
  }

  getStateData(){
    this.userService.getData();
  }

  hideLoader(){
    this.loaderService.hide();
  }

  showLoader(){
    this.loaderService.show();
  }

}
