package com.aggro.service.farmer;

import com.aggro.dto.Instructor.InstructorSessionDto;
import com.aggro.model.InstructorSessionEntity;
import com.aggro.repository.InstructorSessionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FarmerSessionWithInstructorImpl implements FarmerSessionWithInstructor{


    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private InstructorSessionRepository instructorSessionRepository;

    @Override
    public InstructorSessionDto bookSessionwithInstructor(InstructorSessionDto instructorSessionDto) {


        InstructorSessionEntity instructorSessionEntity = this.dtoToEntity(instructorSessionDto);

        return this.entityToDto(this.instructorSessionRepository.save(instructorSessionEntity));
    }

    @Override
    public List<InstructorSessionEntity> getInstructorBookedSessionsById(Integer instructorId) {
         String sessionDoneOrNot = "no";
        return instructorSessionRepository.findByInstructorIdAndSessionDone(instructorId, sessionDoneOrNot);
    }

    @Override
    public InstructorSessionDto updateSessionDoneYes(Integer id) {
        InstructorSessionEntity oldInstructorSession = this.instructorSessionRepository.findById(id).get();

        oldInstructorSession.setSessionDone("yes");
        return this.entityToDto(this.instructorSessionRepository.save(oldInstructorSession));
    }


    //**********************************************************************
    //***** THis function for Converting Entity object to Dto Object **********
    private InstructorSessionDto entityToDto (InstructorSessionEntity instructorSessionEntity){

        InstructorSessionDto instructorSessionDto = this.modelMapper.map(instructorSessionEntity, InstructorSessionDto.class);
        return instructorSessionDto;
    }

    //***** THis function for Converting Dto object to Entity Object **********
    private InstructorSessionEntity dtoToEntity (InstructorSessionDto instructorSessionDto){

        InstructorSessionEntity instructorSessionEntity = this.modelMapper.map(instructorSessionDto, InstructorSessionEntity.class);

        return instructorSessionEntity;
    }
}
