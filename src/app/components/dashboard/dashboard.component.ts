import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

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
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [10, 22, 18, 15, 24],
        label: '',
        fill: false,
        tension: 0.5,
        borderColor: '#9a94a4',
        backgroundColor: 'transparent',
        pointRadius: 0,
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 10,
          callback: (value, index, values) => {
            if (value === 10 || value === 20 || value === 30) {
              return value.toString();
            } else {
              return '';
            }
          },
        },
        title: {
          display: true,
          text: 'Num of Contracts',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  public lineChartLegend = false;
}
