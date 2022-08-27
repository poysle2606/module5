package com.example.controller;

import com.example.model.Patient;
import com.example.model.Patienter;
import com.example.service.IPatientService;
import com.example.service.IPatienterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/patient/api/v1")
public class PatientController {

    @Autowired
    IPatientService iPatientService;

    @GetMapping("")
    public ResponseEntity<List<Patient>> listPatient() {
        List<Patient> patientList = iPatientService.listAll();
        if(patientList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(patientList,HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity addPatient(@RequestBody Patient patient){
        iPatientService.update(patient);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/delete")
    public ResponseEntity deletePatient(@PathVariable int id) {
        iPatientService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable int id, @RequestBody Patient patient){
       Patient patient1 = iPatientService.findById(id);
        if(patient1 == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        patient1.setCodePatient(patient.getCodePatient());
        patient1.setPatienter(patient.getPatienter());
        patient1.setStartDay(patient.getStartDay());
        patient1.setEndDay(patient.getEndDay());
        patient1.setReason(patient.getReason());
        patient1.setMethod(patient.getMethod());
        patient1.setDoctor(patient.getDoctor());

        iPatientService.update(patient1);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Patient>>searchPatient(@RequestParam("search") String search){
        List<Patient> patients = iPatientService.findByName(search);
        if(patients.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
