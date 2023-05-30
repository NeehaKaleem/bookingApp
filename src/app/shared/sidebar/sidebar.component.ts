import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  mini: boolean = true;
  selectedItem: string = 'All Homes';
  sidebarList: any = [
    { iconSrc: '../../../assets/images/all_home_icon.svg', name: 'All Homes' },
    {
      iconSrc: '../../../assets/images/view_icon.svg',
      name: 'Amazing Views',
    },
    {
      iconSrc: '../../../assets/images/tiny_home_icon.svg',
      name: 'Tiny Homes',
    },
    {
      iconSrc: '../../../assets/images/kitchen_icon.svg',
      name: "Chef's Kitchen",
    },
    { iconSrc: '../../../assets/images/surfing_icon.svg', name: 'Surfing' },
    { iconSrc: '../../../assets/images/mansion_icon.svg', name: 'Mansions' },
    { iconSrc: '../../../assets/images/luxe_icon.svg', name: 'Luxe' },
    {
      iconSrc: '../../../assets/images/tree_house_icon.svg',
      name: 'Treehouses',
    },
    { iconSrc: '../../../assets/images/camping_icon.svg', name: 'Camping' },
    { iconSrc: '../../../assets/images/beach_icon.svg', name: 'Beachfront' },
    { iconSrc: '../../../assets/images/farm_icon.svg', name: 'Farms' },
    { iconSrc: '../../../assets/images/castle_icon.svg', name: 'Castles' },
    { iconSrc: '../../../assets/images/island_icon.svg', name: 'Islands' },
    { iconSrc: '../../../assets/images/yard_icon.svg', name: 'Vineyards' },
    {
      iconSrc: '../../../assets/images/pool_icon.svg',
      name: 'Amazing Pools',
    },
    { iconSrc: '../../../assets/images/sking_icon.svg', name: 'Skiing' },
    { iconSrc: '../../../assets/images/desert_icon.svg', name: 'Deserts' },
  ];
  constructor() {}

  ngOnInit(): void {}
  toggleSidebar() {
    if (this.mini) {
      document.getElementById('leftSidebar')!.style.width = '250px';
      this.mini = false;
    } else {
      document.getElementById('leftSidebar')!.style.width = '85px';
      this.mini = true;
    }
  }
}
