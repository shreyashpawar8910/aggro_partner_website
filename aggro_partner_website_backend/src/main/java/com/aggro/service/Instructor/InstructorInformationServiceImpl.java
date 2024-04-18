package com.aggro.service.Instructor;

import com.aggro.dto.Instructor.InstructorInformationDto;
import com.aggro.model.InstructorInformationEntity;
import com.aggro.repository.InstructorAdvertisementRepository;
import com.aggro.repository.InstructorInformationRepository;
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
public class InstructorInformationServiceImpl implements  InstructorInformationService{


    @Autowired
    private InstructorInformationRepository instructorInformationRepository;



    @Autowired
    private ModelMapper modelMapper;

    @Override
    public InstructorInformationEntity saveInstructorInformation(InstructorInformationDto instructorInformationDto) {

        String filePath = null;
        if (instructorInformationDto.getImage() !=null){
            byte [] bytes;

            try{
                bytes =  instructorInformationDto.getImage().getBytes();
                filePath = "G:/College/New Start/Aggro Partner/Images/Instructor_Information/"+ instructorInformationDto.getImage().getOriginalFilename();

                // Create the file on disk
                File imageFile = new File(filePath);

                // Write the bytes to the file
                FileUtils.writeByteArrayToFile(imageFile, bytes);
                instructorInformationDto.setInfoImagePath(filePath);

            }catch (IOException e){
                throw new RuntimeException(e);
            }
        }

        return this.instructorInformationRepository.save(this.dtoToEntity(instructorInformationDto));
    }

    @Override
    public List<InstructorInformationDto> getInstructorInfoByInstructorId(Integer instructorId) {

        List<InstructorInformationEntity> instructorInformationEntities = this.instructorInformationRepository.findByInstructorId(instructorId);


        return instructorInformationEntities.stream().map(this::getInstructorInfoDataImage)
                .collect(Collectors.toList());
    }



    public InstructorInformationDto getInstructorInfoDataImage(InstructorInformationEntity instructorInformationEntity) {

        try {

            Path imagePath = Paths.get(instructorInformationEntity.getInfoImagePath());
            byte[] imageData = Files.readAllBytes(imagePath);

            InstructorInformationDto instructorInformationDto = new InstructorInformationDto();

            instructorInformationDto.setId(instructorInformationEntity.getId());

            instructorInformationDto.setImageData(imageData);
            instructorInformationDto.setInstructorId(instructorInformationEntity.getInstructorId());
            instructorInformationDto.setInfoTitle(instructorInformationEntity.getInfoTitle());
            instructorInformationDto.setInfoSubTitle(instructorInformationEntity.getInfoSubTitle());
            instructorInformationDto.setInfoContent(instructorInformationEntity.getInfoContent());
            instructorInformationDto.setInfoRelatedCrops(instructorInformationEntity.getInfoRelatedCrops());
            instructorInformationDto.setInfoInstructorName(instructorInformationEntity.getInfoInstructorName());
            instructorInformationDto.setInfoInstructorPhone(instructorInformationEntity.getInfoInstructorPhone());

            return instructorInformationDto;
        } catch (IOException e) {
            throw new RuntimeException(e);

        }
    }


    @Override
    public InstructorInformationDto getInfoByInfoId(Integer infoId) {

        InstructorInformationEntity instructorInformationEntity = this.instructorInformationRepository.findById(infoId).get();

        return this.entityToDto(instructorInformationEntity);
    }


    @Override
    public InstructorInformationEntity updateInstructorInformation(InstructorInformationDto instructorInformationDto, Integer id) {

        InstructorInformationEntity instructorInformationEntity = this.instructorInformationRepository.findById(id).get();

        instructorInformationEntity.setInfoTitle(instructorInformationDto.getInfoTitle());
        instructorInformationEntity.setInfoSubTitle(instructorInformationDto.getInfoSubTitle());
        instructorInformationEntity.setInfoContent(instructorInformationDto.getInfoContent());
        instructorInformationEntity.setInfoRelatedCrops(instructorInformationDto.getInfoRelatedCrops());
        instructorInformationEntity.setInfoInstructorName(instructorInformationDto.getInfoInstructorName());
        instructorInformationEntity.setInfoInstructorPhone(instructorInformationDto.getInfoInstructorPhone());

        return this.instructorInformationRepository.save(instructorInformationEntity);
    }

    @Override
    public void deleteInfo(Integer id) {
         this.instructorInformationRepository.deleteById(id);
    }

    // ************** Get ALl Instructor Research Blogs ********************
    @Override
    public List<InstructorInformationDto> getAllResearchBlogs() {

        List<InstructorInformationEntity> instructorInformationEntity = this.instructorInformationRepository.findAll();

        return instructorInformationEntity.stream().map(this::getInstructorInfoDataImage)
                .collect(Collectors.toList());
    }

    //**********  Get Search Research Blogs of Instructors ********************
    @Override
    public List<InstructorInformationDto> getSearchResearchBlogs(String data) {

        List<InstructorInformationEntity> instructorInformationEntity = this.instructorInformationRepository.findByInfoTitleContainingOrInfoSubTitleContainingOrInfoRelatedCropsContaining(data, data, data);

        return instructorInformationEntity.stream().map(this::getInstructorInfoDataImage)
                .collect(Collectors.toList());
    }


    //**********************************************************************
    //***** THis function for Converting Entity object to Dto Object **********
    private InstructorInformationDto entityToDto (InstructorInformationEntity instructorInformationEntity){

        InstructorInformationDto instructorInformationDto = this.modelMapper.map(instructorInformationEntity, InstructorInformationDto.class);
        return instructorInformationDto;
    }

    //***** THis function for Converting Dto object to Entity Object **********
    private InstructorInformationEntity dtoToEntity (InstructorInformationDto instructorInformationDto){

        InstructorInformationEntity instructorInformationEntity = this.modelMapper.map(instructorInformationDto, InstructorInformationEntity.class);

        return instructorInformationEntity;
    }

}
