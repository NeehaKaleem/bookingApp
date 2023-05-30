import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  filterModal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  cardModal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}
}
