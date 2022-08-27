import {Component, OnInit} from '@angular/core';
import {BenhAn} from '../../model/benh-an';
import {BenhAnService} from '../../service/benh-an.service';

@Component({
  selector: 'app-danh-sach-benh-an',
  templateUrl: './danh-sach-benh-an.component.html',
  styleUrls: ['./danh-sach-benh-an.component.css']
})
export class DanhSachBenhAnComponent implements OnInit {
  listPatient: BenhAn[] = [];
  idDelete: number;
  nameDelete: string;
  p = 1;
  search: string;

  constructor(private patientService: BenhAnService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  openDelete(id: number, codeBa: string) {
    this.idDelete = id;
    this.nameDelete = codeBa;
  }

  getAll() {
    this.patientService.getAll().subscribe(value => {
      this.listPatient = value;
    }, error => {
    }, () => {
    });
  }

  delete(idDelete: number): void {
    this.patientService.delete(idDelete).subscribe(value => {
      this.getAll();
      alert('Xóa bệnh án thành công');
    }, error => {
    }, () => {
    });
  }

  searchs() {
    return this.patientService.searchEverything(this.search).subscribe(value => {
      this.listPatient = value;
      this.p = 1;
    });
  }
}
