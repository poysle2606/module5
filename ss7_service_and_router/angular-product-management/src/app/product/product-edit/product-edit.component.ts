import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {Observable} from 'rxjs';
import {CategoryService} from '../../category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category[] = [];
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    }, error => {
    }, () => {
    });

  }

  ngOnInit() {
    this.getCategoryList();
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        category: new FormControl(product.category),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    }, error => {
      }
    , () => {
    });
  }

  updateProduct(id: number): any {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe( value => {
      this.router.navigateByUrl('');
      alert('Cập nhật thành công');
    }, error => {
    }, () => {
    });
  }

  getCategoryList() {
    this.categoryService.getAll().subscribe( value => {
      this.categoryList = value;
    });
  }
}

