import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhAnService} from '../../service/benh-an.service';
import {Router} from '@angular/router';
import {BenhNhan} from '../../../benh-nhan/benh-nhan/model/benh-nhan';
import {BenhNhanService} from '../../../benh-nhan/benh-nhan/service/benh-nhan.service';

@Component({
  selector: 'app-them-moi-benh-an',
  templateUrl: './them-moi-benh-an.component.html',
  styleUrls: ['./them-moi-benh-an.component.css']
})
export class ThemMoiBenhAnComponent implements OnInit {
  addPatientForm: FormGroup = new FormGroup({
    codePatient: new FormControl('', [Validators.required]),
    patienter: new FormGroup({
      id: new FormControl(''),
      codePatienter: new FormControl('', [Validators.required]),
      namePatienter: new FormControl('', [Validators.required])
    }),
    startDay: new FormControl('', [Validators.required]),
    endDay: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required]),
    method: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required])
  });
  listPatienter: BenhNhan[];

  constructor(private patientService: BenhAnService,
              private patienterService: BenhNhanService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.patienterService.getAll().subscribe(value => {
      this.listPatienter = value;
    });
  }

  submit() {
    const patient = this.addPatientForm.value;
    this.patienterService.save(patient.patienter).subscribe(value => {
      this.patienterService.findById(value.id).subscribe(value1 => {
        patient.patienter = {
          id: value1.id,
          codePatienter: value1.codePatienter,
          namePatienter: value1.namePatienter,
        };
        console.log(patient.patienter);
        console.log(patient);
        console.log(value1);
        this.patientService.save(patient).subscribe(value2 => {
        }, error => {
        }, () => {
          this.router.navigate(['/patient/list']);
          alert('Thêm mới thành công!');
        });
      });
    });
  }
}
