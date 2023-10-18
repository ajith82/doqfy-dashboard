import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerList = ['Dashboard', 'Contracts', 'Reports', 'Respository'];
  clickedIndex: number = 0;

  listClick(i:number){
    this.clickedIndex = i;
  }
}
