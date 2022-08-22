import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product[] = [];
  idProduct: number;
  nameProduct: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.product = this.productService.getAll();
  }

  openFacility(product: Product) {
    this.idProduct = product.id;
    this.nameProduct = product.name;
  }

  delete(idProduct: number) {
    this.productService.deleteProduct(idProduct);
    this.ngOnInit();
  }
}
