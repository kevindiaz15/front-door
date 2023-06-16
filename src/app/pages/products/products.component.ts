import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  @Input()  products: any[] = [
    { name: 'McDonalds', image: 'McDonalds.png', url: "https://www.mcdonalds.com.co/" },
    { name: 'KFC', image: 'kfc.png', url: "https://www.kfc.co/menu" },
    { name: 'Noa Sushi', image: 'noa.png', url: "https://web.facebook.com/NoaSushiBaq/" },
    { name: 'Dominos', image: 'dominos.jpg', url: "https://www.dominos.com.co/" },
    { name: 'Sopitas y Frijolada', image: 'sopitas.png', url: "https://web.facebook.com/RestauranteSopitas/" },
    { name: 'Fruteria Monkys', image: 'Monky.png', url: "https://www.fruteriamonkys.com/" },
  ];

  constructor() { }

   ngOnInit() {
  }

}