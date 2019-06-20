import { BillingComponent } from './billing.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: BillingComponent,
    data: {
      meta: {
        title: 'Billing title',
        override: true,
        description: 'Billing description'
      }
    },
  },
];

export const BillingRoutes = RouterModule.forChild(routes);
