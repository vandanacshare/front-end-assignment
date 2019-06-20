import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  public resultData;
  constructor( private http: HttpClient) { }

  
  ngOnInit() : void{
    this.get_products();  
  }

  get_products(): void {
  
      this.http.get('assets/billing.json').subscribe(
      data => {
         this.resultData = data;	 // FILL THE ARRAY WITH DATA.
       },
       (err: HttpErrorResponse) => {
        console.log (err.message);
       }
     );

    }

}
