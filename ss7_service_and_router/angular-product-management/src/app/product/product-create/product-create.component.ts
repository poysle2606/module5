import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../category/category.service';
import {Category} from '../../model/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    category: new FormControl(),
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe( value => {
      this.getCategoryList();
      this.productForm.reset();
      alert('Thêm thành công');
      this.router.navigateByUrl('');
    });

  }

  getCategoryList() {
    this.categoryService.getAll().subscribe( value => {
      this.categoryList = value;
    });
  }

}
