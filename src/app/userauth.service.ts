import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor(private http: HttpClient) { }

  registerUser(formData) {
    this.http.post<any>('http://localhost:3000/register-user', { 'username': formData.username, 'password': formData.password }).subscribe(data => {
      return data;
    })
  }

  authenticateUser(formData) {
    this.http.post<any>('http://localhost:3000/login', { 'username' : formData.name }).subscribe(data => {
      return data;
    })
  }
}
