import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  constructor(private http: HttpClient) { }

  getComplaints() {
    this.http.get<any>('http://localhost:3000/get-all-complaints').subscribe(data => {
      return data;
    })
  }

  getComplaintByID(formData) {
    this.http.post<any>('http://localhost:3000/get-complaint', { 'id': formData.id }).subscribe(data => {
      return data;
    })
  }

  createComplaints(formData) {
    this.http.post<any>('http://localhost:3000/create-complaint', { 'username': formData.username, 'complaint': formData.complaint }).subscribe(data => {
      return data;
    })
  }

  updateComplaints(formData) {
    this.http.post<any>('http://localhost:3000/update-complaint', { 'id': formData.id }).subscribe(data => {
      return data;
    })
  }

  deleteComplaints(formData) {
    this.http.post<any>('http://localhost:3000/update-complaint', { 'id': formData.id }).subscribe(data => {
      return data;
    })
  }
}
