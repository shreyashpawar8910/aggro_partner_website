package com.aggro.repository;

import com.aggro.model.InstructorAdvertisementEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InstructorAdvertisementRepository extends JpaRepository<InstructorAdvertisementEntity, Integer> {

    List<InstructorAdvertisementEntity> findByInstructorId(Integer id);
}
