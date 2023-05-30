import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { HomeService } from './services/home.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
declare var $: any;
export interface HouseDataTypes {
  title?: string;
  description?: string;
  picture?: string;
  price?: string;
  beds?: number;
  rooms?: number;
  guests?: number;
  baths?: number;
  average_rating: number;
  ratings: RatingType[];
  isFavourite?: boolean;
}
export interface RatingType {
  name: string;
  rating: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isHoverIcon: boolean = false;
  filterModal: boolean = false;
  modalHeight: string = 'calc(100vh - 140px)';
  imageModalHeight: string = '100%';
  imageModalMaxHeight: string = '100vh';
  imageModalWidth: string = '1000px';
  maxValue: string = '$510';
  imageModal: boolean = false;
  selectedHouse: any = {};
  minValue: string = '$0';
  modalMaxHeight: string = 'calc(100vh - 140px)';
  modalWidth: string = '430px';
  selectedHoverIndex: string | number = '';
  cards: HouseDataTypes[] = [
    {
      picture: '../../../assets/images/card-pic1.jpg',
      title: 'Whitefish Estate',
      description: 'Whitefish,Montana,United States',
      price: '$10,000',
      beds: 5,
      rooms: 4,
      guests: 8,
      baths: 4,
      average_rating: 4.7,
      ratings: [
        {
          name: 'cleanliness',
          rating: 5,
        },
        {
          name: 'accuracy',
          rating: 4.5,
        },
        {
          name: 'communication',
          rating: 4.7,
        },
        {
          name: 'location',
          rating: 5,
        },
        {
          name: 'Check in',
          rating: 4.5,
        },
        {
          name: 'value',
          rating: 4.8,
        },
      ],
    },
    {
      picture: '../../../assets/images/card-pic2.jpg',
      title: 'Luxury stay in Weston, Saint James, Barbados',
      description: 'Weston, Saint James, Barbados',
      beds: 9,
      rooms: 5,
      guests: 4,
      baths: 2,
      average_rating: 5.0,
      ratings: [
        {
          name: 'cleanliness',
          rating: 4,
        },
        {
          name: 'accuracy',
          rating: 4,
        },
        {
          name: 'communication',
          rating: 4.7,
        },
        {
          name: 'location',
          rating: 5,
        },
        {
          name: 'Check in',
          rating: 4.5,
        },
        {
          name: 'value',
          rating: 4.8,
        },
      ],
      price: '$1500',
    },
    {
      picture: '../../../assets/images/card-pic3.jpg',
      title: 'Numero 22 - Lake Como - Design Living & Lake View',
      description: 'Laglio, Lombardia, Italy',
      beds: 9,
      rooms: 5,
      guests: 4,
      baths: 2,
      average_rating: 5.0,
      ratings: [
        {
          name: 'cleanliness',
          rating: 4,
        },
        {
          name: 'accuracy',
          rating: 4,
        },
        {
          name: 'communication',
          rating: 4.7,
        },
        {
          name: 'location',
          rating: 5,
        },
        {
          name: 'Check in',
          rating: 4.5,
        },
        {
          name: 'value',
          rating: 4.8,
        },
      ],
      price: '$359',
    },
    {
      picture: '../../../assets/images/card-pic4.jpg',
      title: '7,500 sq ft Private Beachfront Estate',
      description: 'Dubai, United Arab Emirates',
      price: '$4000',
      beds: 5,
      rooms: 4,
      guests: 8,
      baths: 4,
      average_rating: 4.7,
      ratings: [
        {
          name: 'cleanliness',
          rating: 5,
        },
        {
          name: 'accuracy',
          rating: 4.5,
        },
        {
          name: 'communication',
          rating: 4.7,
        },
        {
          name: 'location',
          rating: 5,
        },
        {
          name: 'Check in',
          rating: 4.5,
        },
        {
          name: 'value',
          rating: 4.8,
        },
      ],
    },
    {
      picture: '../../../assets/images/card-pic5.jpg',
      title: 'Bohemian & Spacious / Private Pool and Garden',
      description: 'Tulum, Quintana Roo, Mexico',
      price: '$15,000',
      beds: 5,
      rooms: 4,
      guests: 8,
      baths: 4,
      average_rating: 4.7,
      ratings: [
        {
          name: 'cleanliness',
          rating: 5,
        },
        {
          name: 'accuracy',
          rating: 4.5,
        },
        {
          name: 'communication',
          rating: 4.7,
        },
        {
          name: 'location',
          rating: 5,
        },
        {
          name: 'Check in',
          rating: 4.5,
        },
        {
          name: 'value',
          rating: 4.8,
        },
      ],
    },
    {
      picture: '../../../assets/images/card-pic6.jpeg',
      title: 'Designer A-Frame Cabin in the Trees',
      description: 'Lake Arrowhead, California, United States',
      price: '$1000',
      beds: 5,
      rooms: 4,
      guests: 8,
      baths: 4,
      average_rating: 3.99,
      ratings: [
        {
          name: 'cleanliness',
          rating: 4.0,
        },
        {
          name: 'accuracy',
          rating: 4.0,
        },
        {
          name: 'communication',
          rating: 4,
        },
        {
          name: 'location',
          rating: 5,
        },
        {
          name: 'Check in',
          rating: 3,
        },
        {
          name: 'value',
          rating: 3.3,
        },
      ],
    },

    {
      picture: '../../../assets/images/card-pic7.jpg',
      title: 'Fully Renovated 2 BR on River w/ Pool - Walk to To',
      description: 'Aspen, Colorado, United States',
      price: '$570',
      beds: 5,
      rooms: 4,
      guests: 8,
      baths: 4,
      average_rating: 4.1,
      ratings: [
        {
          name: 'cleanliness',
          rating: 3.9,
        },
        {
          name: 'accuracy',
          rating: 4.0,
        },
        {
          name: 'communication',
          rating: 4.0,
        },
        {
          name: 'location',
          rating: 5,
        },
        {
          name: 'Check in',
          rating: 3.3,
        },
        {
          name: 'value',
          rating: 4.0,
        },
      ],
    },
    {
      picture: '../../../assets/images/card-pic8.jpg',
      title: "Magnolia's Hillcrest Cottage",
      description: 'Waco, Texas, United States',
      price: '$190',
      beds: 5,
      rooms: 4,
      guests: 8,
      baths: 4,
      average_rating: 4.7,
      ratings: [
        {
          name: 'cleanliness',
          rating: 5,
        },
        {
          name: 'accuracy',
          rating: 4.5,
        },
        {
          name: 'communication',
          rating: 4.7,
        },
        {
          name: 'location',
          rating: 5,
        },
        {
          name: 'Check in',
          rating: 4.5,
        },
        {
          name: 'value',
          rating: 4.8,
        },
      ],
    },
    {
      picture: '../../../assets/images/card-pic9.jpg',
      title: 'Unique Architecture Cave House by Cycladica',
      description: 'Oia, South Aegean, Greece',
      price: '$780',
      beds: 8,
      rooms: 6,
      guests: 6,
      baths: 5,
      average_rating: 3.5,
      ratings: [
        {
          name: 'cleanliness',
          rating: 5,
        },
        {
          name: 'accuracy',
          rating: 4.5,
        },
        {
          name: 'communication',
          rating: 4.7,
        },
        {
          name: 'location',
          rating: 5,
        },
        {
          name: 'Check in',
          rating: 4.5,
        },
        {
          name: 'value',
          rating: 4.8,
        },
      ],
    },
    {
      picture: '../../../assets/images/card-pic10.jpg',
      title: 'ATELIER ArtVillas Costa Rica',
      description: 'Uvita, Osa, Puntaneras, Costa Rica',
      price: '$800',
      beds: 5,
      rooms: 4,
      guests: 8,
      baths: 4,
      average_rating: 4.8,
      ratings: [
        {
          name: 'cleanliness',
          rating: 5,
        },
        {
          name: 'accuracy',
          rating: 3.5,
        },
        {
          name: 'communication',
          rating: 4.0,
        },
        {
          name: 'location',
          rating: 4.9,
        },
        {
          name: 'Check in',
          rating: 4.5,
        },
        {
          name: 'value',
          rating: 4.8,
        },
      ],
    },
    {
      picture: '../../../assets/images/card-pic1.jpg',
      title: 'Mountainside Luxury Cabin with Batulao View',
      description: 'Calaca, Calabarzon, Philippines',
      price: '$140',
      beds: 6,
      rooms: 2,
      guests: 3,
      baths: 2,
      average_rating: 2.0,
      ratings: [
        {
          name: 'cleanliness',
          rating: 1.5,
        },
        {
          name: 'accuracy',
          rating: 2.5,
        },
        {
          name: 'communication',
          rating: 2.0,
        },
        {
          name: 'location',
          rating: 1.99,
        },
        {
          name: 'Check in',
          rating: 3,
        },
        {
          name: 'value',
          rating: 2,
        },
      ],
    },
  ];
  placesList: any = [
    {
      title: 'Entire Place',
      description: 'A place all to yourself',
      value: '',
    },
    {
      title: 'Private room',
      description:
        'Your own room in a home or a hotel, plus some shared common spaces.',
      value: '',
    },
    {
      title: 'Shared room',
      description:
        'A sleeping space and common areas that may be shared with others.',
      value: '',
    },
  ];
  categoryList: any = [
    { text: 'Bedrooms' },
    { text: 'Beds' },
    { text: 'Bathrooms' },
  ];
  constructor(
    private homeService: HomeService,
    private modalService: BsModalService
  ) {
    this.getFilterModalValue();
  }
  ngOnInit(): void {}
  getFilterModalValue() {
    this.homeService.filterModal$.subscribe((res: boolean) => {
      this.filterModal = res;
    });
  }
  closeModal() {
    this.filterModal = false;
    this.homeService.filterModal$.next(false);
  }

  modalRef?: BsModalRef;
  openCardDetail(template: TemplateRef<any>, card: any) {
    let config = {
      animated: true,
      keyboard: true,
      backdrop: true,
      id: 'myModal',
      ignoreBackdropClick: false,
      class: 'house-detail animate__animated animate__slideInRight',
    };
    // bounce-in-right
    this.selectedHouse = card;
    this.homeService.cardModal$.next(true);
    this.modalRef = this.modalService.show(template, config);
    setTimeout(() => {
      const element: any = document.querySelector('.house-detail');
      if (element.classList.contains('animate__animated')) {
        element.classList.remove('animate__slideInRight');
      }
    }, 1000);
  }

  onCloseDetail(event: object) {
    const element: any = document.querySelector('.house-detail');
    element.classList.remove('animate__slideInRight');
    $('.house-detail').addClass('animate__fadeOutRight');
    setTimeout(() => {
      this.modalRef?.hide();
      this.homeService.cardModal$.next(false);
    }, 300);
  }
}
