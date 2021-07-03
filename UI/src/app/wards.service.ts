import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WardsService {

  constructor(private http: HttpClient) { }


  getAllbooks(page: Number, limit: Number) {
    return this.http.get<any>(`5000/books/list?page=${page}&limit=${limit}`)
  }
  getAllbooksSearch(page: Number, limit: Number,keyword) {
    return this.http.get<any>(`5000/books/list?page=${page}&limit=${limit}&search=${keyword}`)
  }
  
}
