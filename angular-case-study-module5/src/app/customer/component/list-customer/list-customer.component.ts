import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  idDelete: number;
  nameDelete: string;
  p = 1;
  listCustomer: Customer[];
  search: string;

  constructor(private customerService: CustomerServiceService,
              private toast: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(value => {
      this.listCustomer = value;
    });
  }


  openDelete(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  delete(idDelete: number): void {
    this.customerService.delete(idDelete).subscribe(value => {
      this.getAll();
      this.toast.success('Xóa khách hàng thành công', 'tittle', {
        timeOut: 2500, progressBar: false
      });
    }, error => {
    }, () => {
    });
  }

  searchs() {
    return this.customerService.searchEverything(this.search).subscribe(value => {
      this.listCustomer = value;
      this.p = 1;
    });
  }
}
