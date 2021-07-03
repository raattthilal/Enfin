import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccService {
url='5001/authenticate/login';

  constructor(private http:HttpClient) { }


getdata(){
  return this.http.post<any>(this.url,{username:"admin",password:"password"});
}

}
