import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string = 'cart';
    
  public get listFilter(): string {
        return this._listFilter;
    }
    
  public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

  filteredProducts: IProduct[];
  products: IProduct[] = [
      {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden-cart.png"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2019",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.jpg"
    }

  ];

  constructor() {
      this.filteredProducts = this.products;
      this.listFilter = 'cart';

  }

  performFilter(filterBy:string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  ngOnInit():void {
      console.log("Hello");
  }
}
