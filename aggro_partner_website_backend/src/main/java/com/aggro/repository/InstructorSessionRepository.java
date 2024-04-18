package com.aggro.repository;

import com.aggro.model.InstructorSessionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InstructorSessionRepository extends JpaRepository<InstructorSessionEntity, Integer> {


    public List<InstructorSessionEntity> findByInstructorIdAndSessionDone(Integer instructorId, String sessionDoneOrNot);

}
