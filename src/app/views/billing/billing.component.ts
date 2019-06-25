import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {BillingService} from './billing.services';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  public resultData;
  constructor( private http: HttpClient, private billingService: BillingService) { }

  ngOnInit() : void{
    this.get_products();  
  }

  get_products(): void {
    this.billingService.getBillingList().subscribe((data) => {
      if (data) {
        this.resultData = data;
      }
    },
      error => console.log('oops', error)
    );

    }

}
