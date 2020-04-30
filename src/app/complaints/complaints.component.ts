import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../complaints.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  constructor(private complaintsService: ComplaintsService) { }
  complaints: any;

  ngOnInit(): void {
    this.getAllComplaints();
  }

  getAllComplaints() {
    this.complaints = this.complaintsService.getComplaints();
  }

}
