package com.aggro.service.Instructor;

import com.aggro.dto.Instructor.InstructorProfileDto;
import com.aggro.model.InstructorProfileEntity;

import java.util.List;

public interface InstructorService {
    public InstructorProfileDto saveIstructorProfile(InstructorProfileDto instructorProfileDto);

    public InstructorProfileDto getInstructorByInstructorId(Integer Id);

    public InstructorProfileDto updateInstructor(InstructorProfileDto instructorProfileDto, Integer id);

    public List<InstructorProfileEntity> getAllInstructors();

    public List<InstructorProfileEntity> getSearchInstructors(String data);
}
