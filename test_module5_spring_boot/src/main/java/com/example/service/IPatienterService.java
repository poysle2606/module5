package com.example.service;

import com.example.model.Patienter;

import java.util.List;

public interface IPatienterService {

    List<Patienter> listAll();

    void create(Patienter patienter);

    void update(Patienter patienter);

    void delete(int id);

    Patienter findById(int id);
}
