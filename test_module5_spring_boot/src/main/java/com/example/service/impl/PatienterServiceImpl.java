package com.example.service.impl;

import com.example.model.Patienter;
import com.example.repository.IPatienterRepository;
import com.example.service.IPatienterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatienterServiceImpl implements IPatienterService {

    @Autowired
    IPatienterRepository iPatienterRepository;


    @Override
    public List<Patienter> listAll() {
        return iPatienterRepository.listPatienter();
    }

    @Override
    public void create(Patienter patienter) {

    }

    @Override
    public void update(Patienter patienter) {

    }

    @Override
    public void delete(int id) {

    }

    @Override
    public Patienter findById(int id) {
        return null;
    }
}
