package com.example.model;

import javax.persistence.*;

@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String codePatient;

    @ManyToOne
    @JoinColumn(name = "patienter_id", referencedColumnName = "id")
    private Patienter patienter;

    private String startDay;
    private String endDay;
    private String reason;
    private String method;
    private String doctor;

    public Patient() {
    }

    public Patient(int id, String codePatient, Patienter patienter, String startDay,
                   String endDay, String reason, String method, String doctor) {
        this.id = id;
        this.codePatient = codePatient;
        this.patienter = patienter;
        this.startDay = startDay;
        this.endDay = endDay;
        this.reason = reason;
        this.method = method;
        this.doctor = doctor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodePatient() {
        return codePatient;
    }

    public void setCodePatient(String codePatient) {
        this.codePatient = codePatient;
    }

    public Patienter getPatienter() {
        return patienter;
    }

    public void setPatienter(Patienter patienter) {
        this.patienter = patienter;
    }

    public String getStartDay() {
        return startDay;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public String getEndDay() {
        return endDay;
    }

    public void setEndDay(String endDay) {
        this.endDay = endDay;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }
}
