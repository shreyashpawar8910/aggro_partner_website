package com.aggro.service.Instructor;

import com.aggro.dto.Instructor.InstructorAdvertisementDto;
import com.aggro.dto.Instructor.InstructorInformationDto;
import com.aggro.model.InstructorAdvertisementEntity;
import com.aggro.model.InstructorInformationEntity;
import com.aggro.repository.InstructorAdvertisementRepository;
import org.apache.commons.io.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class InstructorAdvertiseServiceImpl implements InstructorAdvertiseService{


    @Autowired
    private InstructorAdvertisementRepository instructorAdvertisementRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public InstructorAdvertisementEntity saveInstructorAdvertise(InstructorAdvertisementDto instructorAdvertisementDto) {

        String filePath = null;
        if(instructorAdvertisementDto.getImage()!=null){

            byte [] bytes;

            try {
                bytes = instructorAdvertisementDto.getImage().getBytes();

                filePath = "G:/College/New Start/Aggro Partner/Images/Instructor_Advertisement/"+instructorAdvertisementDto.getImage().getOriginalFilename();

                // Create the file on disk
                File imageFile = new File(filePath);

                FileUtils.writeByteArrayToFile(imageFile, bytes);
                instructorAdvertisementDto.setAdvImagePath(filePath);


            }catch (IOException e){
                throw new RuntimeException(e);
            }
        }

        return this.instructorAdvertisementRepository.save(this.dtoToEntity(instructorAdvertisementDto));
    }

    @Override
    public List<InstructorAdvertisementDto> getAdvertisementByInstructorId(Integer id) {
        List<InstructorAdvertisementEntity> instructorAdvertisementEntities = this.instructorAdvertisementRepository.findByInstructorId(id);

        return instructorAdvertisementEntities.stream().map(this::getAdvertisementData).collect(Collectors.toList());
    }

    @Override
    public List<InstructorAdvertisementDto> getAllAdvertisement() {
        List<InstructorAdvertisementEntity> instructorAdvertisementEntities = this.instructorAdvertisementRepository.findAll();

        return instructorAdvertisementEntities.stream().map(this::getAdvertisementData).collect(Collectors.toList());
    }

    @Override
    public void deleteAdvertisement(Integer id) {
        this.instructorAdvertisementRepository.deleteById(id);
    }


    public InstructorAdvertisementDto getAdvertisementData (InstructorAdvertisementEntity instructorAdvertisementEntity){

        try {
            Path imagePath = Paths.get(instructorAdvertisementEntity.getAdvImagePath());
            byte[] imageData = Files.readAllBytes(imagePath);

            InstructorAdvertisementDto instructorAdvertisementDto = new InstructorAdvertisementDto();

            instructorAdvertisementDto.setImageData(imageData);
            instructorAdvertisementDto.setId(instructorAdvertisementEntity.getId());
            instructorAdvertisementDto.setInstructorId(instructorAdvertisementEntity.getInstructorId());

            return instructorAdvertisementDto;

        }catch (IOException e) {
            throw new RuntimeException(e);

        }


    }




    //**********************************************************************
    //***** THis function for Converting Entity object to Dto Object **********
    private InstructorAdvertisementDto entityToDto (InstructorAdvertisementEntity instructorAdvertisementEntity){

        InstructorAdvertisementDto instructorAdvertisementDto = this.modelMapper.map(instructorAdvertisementEntity, InstructorAdvertisementDto.class);
        return instructorAdvertisementDto;
    }

    //***** THis function for Converting Dto object to Entity Object **********
    private InstructorAdvertisementEntity dtoToEntity (InstructorAdvertisementDto instructorAdvertisementDto){

        InstructorAdvertisementEntity instructorAdvertisementEntity = this.modelMapper.map(instructorAdvertisementDto, InstructorAdvertisementEntity.class);

        return instructorAdvertisementEntity;
    }
}
