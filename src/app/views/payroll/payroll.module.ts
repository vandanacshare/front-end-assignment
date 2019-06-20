import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutes } from './payroll.routing';
import { PayrollComponent } from './payroll.component';
//import { SidebarModule} from '../../layouts/sidebar/sidebar.module';
//import { ToolbarModule} from '../../layouts/toolbar/toolbar.module';

import { MatCardModule, MatInputModule,MatSelectModule ,MatButtonModule,MatAutocompleteModule,MatIconModule, MatTabsModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
    , PayrollRoutes
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
  declarations: [PayrollComponent]
})
export class PayrollModule { }
