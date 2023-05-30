import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ModalComponent } from '../../shared/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { HouseDetailComponent } from './house-detail/house-detail.component';

@NgModule({
  declarations: [HomeComponent, ModalComponent, HouseDetailComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
