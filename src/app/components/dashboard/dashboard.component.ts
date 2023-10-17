import { Component } from '@angular/core';
// import tabTitleLogo from '../../../assets/images/header/Success.svg';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  tabsData = [
    {
      title: '31',
      titleLogo: '../../../assets/images/header/Success.svg',
      tabsDetails: 'Drafts',
      arrow: '../../../assets/images/header/arrowDown.svg',
      num: '2.4%',
    },
    {
      title: '84',
      titleLogo: '../../../assets/images/header/Success.svg',
      tabsDetails: 'Review & Negotiated',
      arrow: '../../../assets/images/header/arrowDown.svg',
      num: '2.4%',
    },
    {
      title: '43',
      titleLogo: '../../../assets/images/header/Success.svg',
      tabsDetails: 'Executed',
      arrow: '../../../assets/images/header/arrowDown.svg',
      num: '2.4%',
    },
    {
      title: '29',
      titleLogo: '../../../assets/images/header/Success.svg',
      tabsDetails: 'Active',
      arrow: '../../../assets/images/header/arrowDown.svg',
      num: '2.4%',
    },
    {
      title: '76',
      titleLogo: '../../../assets/images/header/Success.svg',
      tabsDetails: 'Due to Renewal',
      arrow: '../../../assets/images/header/arrowDown.svg',
      num: '2.4%',
    },
  ];
}
