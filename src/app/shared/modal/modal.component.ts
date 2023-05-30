import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { HomeService } from 'src/app/modules/home/services/home.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() template_?: TemplateRef<any>;
  @Input() customWidth?: string;
  @Input() id?: string;
  @Input() customMaxWidth?: string;
  @Input() customHeight?: string;
  @Input() customMaxHeight?: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  close() {
    document.getElementById('modal')!.classList.remove('animate__slideInRight');
    document.getElementById('modal')!.classList.add('animate__fadeOutRight');

    setTimeout(() => {
      this.callback.emit();
    }, 300);
  }
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getFilterModalValue();
  }
  getFilterModalValue() {
    this.homeService.filterModal$.subscribe((res: boolean) => {
      if (res && document.getElementById('modal')) {
        document
          .getElementById('modal')!
          .classList.add('animate__slideInRight');
      }
    });
  }
}
