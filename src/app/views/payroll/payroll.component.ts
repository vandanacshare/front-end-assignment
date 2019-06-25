import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {PayrollService} from './payroll.services';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  public resultData;
  constructor( private http: HttpClient, private payrollService: PayrollService) { }

  
  ngOnInit() : void{
    this.get_products();  
  }

  get_products(): void {
  
    this.payrollService.getPayrollList().subscribe((data) => {
      if (data) {
        this.resultData = data;
      }
    },
      error => console.log('oops', error)
    );

    }

}
