import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerList = ['Dashboard', 'Contracts', 'Reports', 'Respository'];
  clickedIndex: number = 0;

  listClick(i: number) {
    this.clickedIndex = i;
  }

  sideNav() {
    const list = document.querySelector('ul');
    const hamburgerImg = document.querySelector('.hamburger img');
    list?.classList.toggle('active');
    if (list?.classList.contains('active')) {
      hamburgerImg?.setAttribute(
        'src',
        '../../../assets/images/header/close.svg'
      );
    } else {
      hamburgerImg?.setAttribute(
        'src',
        '../../../assets/images/header/hamburger.svg'
      );
    }
  }
}
