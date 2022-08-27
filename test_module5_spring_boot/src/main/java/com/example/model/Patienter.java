package com.example.model;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Patienter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String codePatienter;
    private String namePatienter;


    @OneToMany(mappedBy = "patienter")
    @JsonBackReference
    private Set<Patient> patients;

    public Patienter() {
    }

    public Patienter(int id, String codePatienter, String namePatienter, Set<Patient> patients) {
        this.id = id;
        this.codePatienter = codePatienter;
        this.namePatienter = namePatienter;
        this.patients = patients;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodePatienter() {
        return codePatienter;
    }

    public void setCodePatienter(String codePatienter) {
        this.codePatienter = codePatienter;
    }

    public String getNamePatienter() {
        return namePatienter;
    }

    public void setNamePatienter(String namePatienter) {
        this.namePatienter = namePatienter;
    }

    public Set<Patient> getPatients() {
        return patients;
    }

    public void setPatients(Set<Patient> patients) {
        this.patients = patients;
    }
}
