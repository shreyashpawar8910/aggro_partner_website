package com.aggro.repository;

import com.aggro.dto.Instructor.InstructorInformationDto;
import com.aggro.model.InstructorInformationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InstructorInformationRepository extends JpaRepository<InstructorInformationEntity, Integer> {

    List<InstructorInformationEntity> findByInstructorId(Integer instructorId);


    List<InstructorInformationEntity> findByInfoTitleContainingOrInfoSubTitleContainingOrInfoRelatedCropsContaining(String data, String data1, String data2);
}
