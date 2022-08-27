package com.example.service.impl;

import com.example.model.Patient;
import com.example.repository.IPatientRepository;
import com.example.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements IPatientService {

    @Autowired
    IPatientRepository iPatientRepository;

    @Override
    public List<Patient> listAll() {
        return iPatientRepository.findAllPatient();
    }

    @Override
    public void create(Patient patient) {

    }

    @Override
    public void update(Patient patient) {

    }

    @Override
    public void delete(int id) {

    }

    @Override
    public Patient findById(int id) {
        return null;
    }

    @Override
    public List<Patient> findByName(String name) {
        return null;
    }
}
