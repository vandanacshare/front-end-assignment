import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  public resultData;
  constructor( private http: HttpClient) { }

  
  ngOnInit() : void{
    this.get_products();  
  }

  get_products(): void {
  
      this.http.get('assets/payroll.json').subscribe(
      data => {
         this.resultData = data;	 // FILL THE ARRAY WITH DATA.
         //  console.log(this.arrBirds[1]);
       },
       (err: HttpErrorResponse) => {
        console.log (err.message);
       }
     );

    }

}
