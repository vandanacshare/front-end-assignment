import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.services';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule,MatSelectModule ,MatButtonModule,MatAutocompleteModule,
  MatIconModule, MatTabsModule} from '@angular/material';

@NgModule({
  imports: [
    DashboardRoutingModule,
    HttpClientModule,
    CommonModule
    , MatCardModule
    , MatInputModule
    , MatSelectModule
    , MatAutocompleteModule
    , MatIconModule
    , MatButtonModule
    , MatTabsModule
  ],
  declarations: [ DashboardComponent ],
  providers: [DashboardService]
})
export class DashboardModule { }
