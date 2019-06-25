import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable()
export class PayrollService {

 constructor(private httpClient: HttpClient) { }

 public getPayrollList(): Observable<any> {
   return this.httpClient.get<any>(`${environment.HEALTH_BACKEND_URL}javelinHealthApi/payroll?functionalArea=Payroll`);
 }
}
