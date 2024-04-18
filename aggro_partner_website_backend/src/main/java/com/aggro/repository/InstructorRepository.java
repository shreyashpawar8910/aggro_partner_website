package com.aggro.repository;

import com.aggro.model.InstructorProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InstructorRepository extends JpaRepository<InstructorProfileEntity, Integer> {
    InstructorProfileEntity findByInstructorId(Integer id);

    List<InstructorProfileEntity> findByInstructorFirstNameContainingOrInstructorLastNameContainingOrInstructorSpeciliestContaining(String data, String data1, String data2);
}
