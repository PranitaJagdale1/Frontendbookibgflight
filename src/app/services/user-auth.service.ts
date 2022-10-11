import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() {}

  //set user item to localstorage
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get user item from localstorage
  public getUser(): any {
    return JSON.parse(localStorage.getItem('user')!);
  }

  //set token to localstorage
  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  //get token item from localstorage
  //localstorage= client side storage
  public getToken(): string {
    return localStorage.getItem('jwtToken')!;
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    // return this.getRoles() && this.getToken();
    return this.getToken();
  }

  
}
