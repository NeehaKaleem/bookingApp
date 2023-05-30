import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HostListener } from '@angular/core';
import { HomeService } from 'src/app/modules/home/services/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  selectedMenu: string = 'Anywhere';
  menu: any = ['Anywhere', 'Something Else', 'Others'];
  totalGuest: number = 0;
  cardModal: boolean = false;
  filterModal: boolean = false;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getFilterModalValue();
    this.getCardModalValue();
  }
  getFilterModalValue() {
    this.homeService.filterModal$.subscribe((res: boolean) => {
      this.filterModal = res;
    });
  }
  getCardModalValue() {
    this.homeService.cardModal$.subscribe((res: boolean) => {
      this.cardModal = res;
      if (res) {
        document
          .getElementById('sub-header')!
          .classList.remove('sub-nav-fixed');
      } else {
        if (document.documentElement.scrollTop > 70) {
          document.getElementById('sub-header')!.classList.add('sub-nav-fixed');
        } else {
          document
            .getElementById('sub-header')!
            .classList.remove('sub-nav-fixed');
        }
      }
    });
  }
  selectMenu(ev: string) {
    this.selectedMenu = ev;
  }
  addGuest() {
    this.totalGuest = this.totalGuest + 1;
  }
  subtractGuest() {
    this.totalGuest = this.totalGuest - 1;
  }
  @HostListener('window:scroll', []) onWindowScroll() {
    if (document.documentElement.scrollTop > 70) {
      document.getElementById('sub-header')!.classList.add('sub-nav-fixed');
    } else {
      document.getElementById('sub-header')!.classList.remove('sub-nav-fixed');
    }
  }
  setModalValue() {
    this.filterModal = !this.filterModal;
    if (document.getElementById('modal') && !this.filterModal) {
      document
        .getElementById('modal')!
        .classList.remove('animate__slideInRight');
      document.getElementById('modal')!.classList.add('animate__fadeOutRight');
    }
    setTimeout(() => {
      this.homeService.filterModal$.next(this.filterModal);
    }, 300);
  }
}
