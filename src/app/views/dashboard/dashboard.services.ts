import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable()
export class DashboardService {

 constructor(private httpClient: HttpClient) { }

 public getCardList(filters: string): Observable<any> {
   return this.httpClient.get<any>(`${environment.BACKEND_URL}v3/launches?${filters}`);
 }
}