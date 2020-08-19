interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Payroll',
    url: '/app-payroll',
    icon: 'icon-pencil',
  },
  {
    name: 'Billing',
    url: '/app-billing',
    icon: 'icon-calculator',
  },
  {
    name: 'Customer & Contract',
    url: '/app-billing',
    icon: 'icon-calculator',
  },
  {
    name: 'Time & Attendance',
    url: '/app-billing',
    icon: 'icon-calculator',
  },
  {
    name: 'Scheduling',
    url: '/app-billing',
    icon: 'icon-calculator',
  },
  {
    name: 'SWF',
    url: '/app-billing',
    icon: 'icon-calculator',
  },
  {
    name: 'Reports',
    url: '/app-billing',
    icon: 'icon-calculator',
  },
  {
    name: 'Incident Management',
    url: '/app-billing',
    icon: 'icon-calculator',
  },
  {
    name: 'Infra',
    url: 'https://app.google.stackdriver.com/?project=gdc-javelin-v2-uat',
    icon: 'icon-calculator',
    attributes: { target: '_blank' }
  }
];
