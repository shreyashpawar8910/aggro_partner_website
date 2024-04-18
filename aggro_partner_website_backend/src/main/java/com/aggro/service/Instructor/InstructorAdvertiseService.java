package com.aggro.service.Instructor;

import com.aggro.dto.Instructor.InstructorAdvertisementDto;
import com.aggro.model.InstructorAdvertisementEntity;

import java.util.List;

public interface InstructorAdvertiseService {

    public InstructorAdvertisementEntity saveInstructorAdvertise(InstructorAdvertisementDto instructorAdvertisementDto);

    public List<InstructorAdvertisementDto> getAdvertisementByInstructorId(Integer id);

    public List<InstructorAdvertisementDto> getAllAdvertisement();

    public void deleteAdvertisement(Integer id);
}
