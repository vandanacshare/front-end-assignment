import { PayrollComponent } from './payroll.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PayrollComponent,
    data: {
      meta: {
        title: 'Payroll title',
        override: true,
        description: 'Payroll description'
      }
    },
  },
];

export const PayrollRoutes = RouterModule.forChild(routes);
