package com.example.service;

import com.example.model.Patient;

import java.util.List;

public interface IPatientService {
    List<Patient> listAll();

    void create(Patient patient);

    void update(Patient patient);

    void delete(int id);

    Patient findById(int id);

    List<Patient> findByName(String name);
}
