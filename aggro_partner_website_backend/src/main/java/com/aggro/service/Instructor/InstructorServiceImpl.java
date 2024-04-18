package com.aggro.service.Instructor;


import com.aggro.dto.Instructor.InstructorProfileDto;
import com.aggro.repository.InstructorRepository;
import org.modelmapper.ModelMapper;
import com.aggro.model.InstructorProfileEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructorServiceImpl implements InstructorService{

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private InstructorRepository instructorRepository;


    // **** This is function for create instructor profile *********
    @Override
    public InstructorProfileDto saveIstructorProfile(InstructorProfileDto instructorProfileDto) {

        InstructorProfileEntity instructorProfileEntity = this.dtoToEntity(instructorProfileDto);

        InstructorProfileEntity saveInstructorProfile = this.instructorRepository.save(instructorProfileEntity);

        return this.entityToDto(saveInstructorProfile);
    }

    // ******** This Function for getting All Data By Instructor Id ***********
    @Override
    public InstructorProfileDto getInstructorByInstructorId(Integer instructorId) {

        InstructorProfileEntity instructorProfileEntity = this.instructorRepository.findByInstructorId(instructorId);

        return this.entityToDto(instructorProfileEntity);
    }

    @Override
    public InstructorProfileDto updateInstructor(InstructorProfileDto instructorProfileDto, Integer id) {



        InstructorProfileEntity oldInstructor = this.instructorRepository.findById(id).get();


            oldInstructor.setInstructorFirstName(instructorProfileDto.getInstructorFirstName());
            oldInstructor.setInstructorLastName(instructorProfileDto.getInstructorLastName());
            oldInstructor.setInstructorSpeciliest(instructorProfileDto.getInstructorSpeciliest());
            oldInstructor.setInstructorExperiance(instructorProfileDto.getInstructorExperiance());
            oldInstructor.setInstructorEmail(instructorProfileDto.getInstructorEmail());
            oldInstructor.setInstructorPhoneNumber(instructorProfileDto.getInstructorPhoneNumber());
            oldInstructor.setInstructorCity(instructorProfileDto.getInstructorCity());
            oldInstructor.setInstructorState(instructorProfileDto.getInstructorState());
            oldInstructor.setInstructorOpenToWork(instructorProfileDto.getInstructorOpenToWork());


        return this.entityToDto(this.instructorRepository.save(oldInstructor));
    }

    @Override
    public List<InstructorProfileEntity> getAllInstructors() {

        return instructorRepository.findAll();
    }

    @Override
    public List<InstructorProfileEntity> getSearchInstructors(String data) {

        return instructorRepository.findByInstructorFirstNameContainingOrInstructorLastNameContainingOrInstructorSpeciliestContaining(data, data, data);
    }


    //***** THis function for Converting Entity object to Dto Object **********
    private InstructorProfileDto entityToDto (InstructorProfileEntity instructorProfileEntity){

        InstructorProfileDto instructorProfileDto = this.modelMapper.map(instructorProfileEntity, InstructorProfileDto.class);
        return instructorProfileDto;
    }

    //***** THis function for Converting Dto object to Entity Object **********
    private InstructorProfileEntity dtoToEntity (InstructorProfileDto instructorProfileDto){

        InstructorProfileEntity instructorProfileEntity = this.modelMapper.map(instructorProfileDto, InstructorProfileEntity.class);

        return instructorProfileEntity;
    }
}
