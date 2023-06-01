import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EncryptionService } from 'src/app/Services/encryption-service/encryption.service';
import { ILogedInUser } from 'src/app/models/Iloggedinuser';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  private user?: ILogedInUser;
  private readonly stateName = 'common';
  readonly User_State: BehaviorSubject<any>;

  constructor(private readonly encryptionService: EncryptionService) {
    let localStorageData = localStorage.getItem(this.stateName);
    
    if(localStorageData){
      let decryptedData = this.encryptionService.decryptData(localStorageData);
      this.user = JSON.parse(decryptedData);
    } 
      
    this.User_State = new BehaviorSubject<any>(this.user);
  }
  
  getUserState(): Observable<ILogedInUser>{
    return this.User_State
  }

  isLogedIn(): boolean{
    let logedIn = false;
    
    this.User_State.subscribe(x =>{
      if(x && x !== '') logedIn = true;      
    })
    return logedIn;
  }

  setLogedInUser(user: ILogedInUser){
    this.user = user;
    this.User_State.next(this.user);
    this.hydrateState()
  }
  
  setData(){
    let userState = atob(JSON.stringify(this.user));
    localStorage.setItem(this.stateName,userState);
  }
  getData(){
    let localStorageData = localStorage.getItem(this.stateName) ?? '';
    if(localStorageData === null || localStorageData === '') return null; 
    let hydratedData = JSON.parse(localStorageData);
    return hydratedData;    
  }
  
  hydrateState(): void {
    let userState = this.encryptionService.encryptData(JSON.stringify(this.user));
    localStorage.setItem(this.stateName, userState);
  }

  destroyUserState(){
    this.User_State.complete();
    this.User_State.unsubscribe();
    localStorage.removeItem(this.stateName);
  }
  
}
