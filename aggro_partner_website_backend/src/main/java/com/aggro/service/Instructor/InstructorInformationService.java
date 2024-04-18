package com.aggro.service.Instructor;

import com.aggro.dto.Instructor.InstructorInformationDto;
import com.aggro.model.InstructorInformationEntity;

import java.util.List;

public interface InstructorInformationService {

    public InstructorInformationEntity saveInstructorInformation(InstructorInformationDto instructorInformationDto);

    List<InstructorInformationDto> getInstructorInfoByInstructorId(Integer instructorId);

    InstructorInformationDto getInfoByInfoId(Integer infoId);

    public InstructorInformationEntity updateInstructorInformation(InstructorInformationDto instructorInformationDto, Integer id);

    public void deleteInfo(Integer id);

    public List<InstructorInformationDto>  getAllResearchBlogs();

    public List<InstructorInformationDto>  getSearchResearchBlogs(String data);


}
