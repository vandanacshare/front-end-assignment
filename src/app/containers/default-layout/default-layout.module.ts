import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../../app/views/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './default-layout.component';

import { MatCardModule, MatInputModule,MatSelectModule ,MatButtonModule,MatAutocompleteModule,MatIconModule, MatTabsModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
    , MatCardModule
    , MatInputModule
    , MatSelectModule
    , MatAutocompleteModule
    , FormsModule
    , ReactiveFormsModule
    , MatIconModule
    , MatButtonModule
    , MatTabsModule
    , DashboardComponent
    , HttpClientModule
  ],
  declarations: [DefaultLayoutComponent],
  providers: []
})
export class BillingModule { }
