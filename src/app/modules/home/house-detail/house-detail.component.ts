import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
// import { HouseDataTypes } from '../house-list/houses';
// import { numberWithCommas } from 'src/app/directives/utilities';
declare var $: any;
export const buttonAnimation = trigger('buttonAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100%)' }),
    animate('0.5s', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('0.5s', style({ opacity: 0, transform: 'translateX(100%)' })),
  ]),
]);
export const divAnimation = trigger('divAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('0.5s', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('0.5s', style({ transform: 'translateX(100%)' })),
  ]),
]);
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss'],
})
export class HouseDetailComponent implements OnInit {
  // numberWithCommas = numberWithCommas;
  @Input() house!: any;
  @Output() onCloseCardDetail = new EventEmitter<Object>();

  closeHouseDetail() {
    this.onCloseCardDetail.emit('close');
  }

  ngOnChanges(changes: SimpleChanges) {}
  ngOnInit() {}

  doFavourite(house: any) {
    house.isFavourite = !house.isFavourite;
  }
}
