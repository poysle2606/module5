import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {CategoryService} from '../../category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product[] = [];
  idProduct: number;
  nameProduct: string;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    productService.getAll().subscribe( next => {
      this.product = next;
    }, error => {
    });
  }

  ngOnInit(): void {
  }
  openFacility(product: Product) {
    this.idProduct = product.id;
    this.nameProduct = product.name;
  }

  delete(idProduct: number): void {
    this.productService.deleteProduct(idProduct).subscribe(value => {
      this.ngOnInit();
      this.router.navigate(['']);
      alert('Delete success');
    }, error => {
    }, () => {
    });
  }
}
