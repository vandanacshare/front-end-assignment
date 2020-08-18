import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from './dashboard.services';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public resultData;
  buttonValue: string;
  public filters: string;

  constructor( private http: HttpClient, private dashboardService: DashboardService) { }

  ngOnInit(): void {

    this.getCardList(); 
    
  }

  getCardList(): void {
  
    this.filters = "limit=100";

    this.dashboardService.getCardList(this.filters).subscribe((data) => {
      if (data) {
        this.resultData = data;
      }

    },
      error => console.log('oops', error)
    );
  }

  applyYearFilter(yearFilter): void {

    this.filters = "limit=100&launch_year="+yearFilter;
    this.dashboardService.getCardList(this.filters).subscribe((data) => {
      if (data) {
        this.resultData = data;
      }
    },
      error => console.log('oops', error)
    );
  }

  applyLauchFilter(launchFilter) : void{

    this.filters = "limit=100&launch_success="+launchFilter;
    this.dashboardService.getCardList(this.filters).subscribe((data) => {
      if (data) {
        this.resultData = data;
      }
    },
      error => console.log('oops', error)
    );
  }

  applyLandFilter(landFilter) : void{

    this.filters = "limit=100&land_success="+landFilter;
    this.dashboardService.getCardList(this.filters).subscribe((data) => {
      if (data) {
        this.resultData = data;
      }
    },
      error => console.log('oops', error)
    );
  }
   
}
