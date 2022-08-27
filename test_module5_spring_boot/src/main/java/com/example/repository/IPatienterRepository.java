package com.example.repository;

import com.example.model.Patienter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface IPatienterRepository extends JpaRepository<Patienter,Integer> {

    @Query(value = "select * from Patienter", nativeQuery = true)
    List<Patienter> listPatienter();
}
