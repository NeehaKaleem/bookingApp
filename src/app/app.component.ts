import { Component, OnInit } from '@angular/core';
import { HomeService } from './modules/home/services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'airbnb';
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.getFilterModalValue();
  }
  getFilterModalValue() {
    this.homeService.filterModal$.subscribe((res: boolean) => {
      if (res) {
        document.getElementById('main')!.classList.add('hide-scroll');
      } else {
        document.getElementById('main')!.classList.remove('hide-scroll');
      }
    });
  }
}
