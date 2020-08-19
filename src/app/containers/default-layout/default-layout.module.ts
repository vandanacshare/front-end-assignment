import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';

import { MatCardModule, MatInputModule,MatSelectModule ,MatButtonModule,MatAutocompleteModule,MatIconModule, MatTabsModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [DefaultLayoutComponent],
  providers: [],
  exports: [DefaultLayoutComponent]
  
})
export class DefaultLayoutModule { }
