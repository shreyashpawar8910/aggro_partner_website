package com.aggro.service.farmer;

import com.aggro.dto.Instructor.InstructorSessionDto;
import com.aggro.model.InstructorSessionEntity;

import java.util.List;

public interface FarmerSessionWithInstructor {

    public InstructorSessionDto bookSessionwithInstructor(InstructorSessionDto instructorSessionDto);

    public List<InstructorSessionEntity> getInstructorBookedSessionsById(Integer instructorId);

    public InstructorSessionDto updateSessionDoneYes(Integer id);
}
