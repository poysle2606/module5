package com.example.repository;

import com.example.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface IPatientRepository extends JpaRepository<Patient, Integer> {

//    hiển thị danh sách
    @Query(value = "select * from patient", nativeQuery = true)
    List<Patient> findAllPatient();


//    Chỉnh sửa
    @Modifying
    @Query(value = "update Patient set code_patient=:codePatient," +
            " doctor=:doctor," +
            " end_day=:endDay," +
            " method=:method, " +
            " reason=:reason," +
            " start_day=:startDay where id=:id", nativeQuery = true)
    void updatePatient(@Param("codePatient") String codePatient,
                       @Param("doctor") String doctor,
                       @Param("endDay") String endDay,
                       @Param("method") String method,
                       @Param("reason") String reason,
                       @Param("startDay") String startDay,
                       @Param("id") int id);


//    Thêm mới
    @Modifying
    @Query(value = "insert into Patient(code_patient, doctor, end_day, method, reason, start_day)," +
            " values(:codePatient, :doctor, : endDay, :method, :reason, :startDay) ", nativeQuery = true)
    void addPatient(@Param("codePatient") String codePatient,
                       @Param("doctor") String doctor,
                       @Param("endDay") String endDay,
                       @Param("method") String method,
                       @Param("reason") String reason,
                       @Param("startDay") String startDay);


//    tìm kiếm theo tên
    @Query(value = "select * from Patient where code_patient like: search", nativeQuery = true)
    List<Patient> searchByCodePatient(@Param("search") String search);


//    Xóa
    @Query(value = "delete from Patient where id=: id", nativeQuery = true)
    void deletePatient(@Param("id") int id);


//    Tìm kiếm ID
    @Query(value = "select *from Patient where id=: id", nativeQuery = true)
    Patient findById(@Param("id") int id);
}
