import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent implements OnInit {

  constructor(private service: DataService)  { }

  ngOnInit() {
  }

  PopulateAPI(){
    this
    .service
    .generateData()
    .subscribe(
      (data: any) => {
        alert("API data generate successfully!");
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
