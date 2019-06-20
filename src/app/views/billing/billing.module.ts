import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutes } from './billing.routing';
import { BillingComponent } from './billing.component';
//import { SidebarModule} from '../../layouts/sidebar/sidebar.module';
//import { ToolbarModule} from '../../layouts/toolbar/toolbar.module';

import { MatCardModule, MatInputModule,MatSelectModule ,MatButtonModule,MatAutocompleteModule,MatIconModule, MatTabsModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
    , BillingRoutes
    , MatCardModule
    , MatInputModule
    , MatSelectModule
    , MatAutocompleteModule
    , FormsModule
    , ReactiveFormsModule
    , MatIconModule
    , MatButtonModule
    , MatTabsModule
    //, SidebarModule
    //, ToolbarModule
    , HttpClientModule
  ],
  declarations: [BillingComponent]
})
export class BillingModule { }
