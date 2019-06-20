import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()

export class PayrollService {

  //private _httpHeaders;

  //apiUrl: string = "http://localhost:8080/api/healthCheckValidation/getHealthValidation?functionalArea=Payroll";
  constructor(private http: HttpClient) { }
}
