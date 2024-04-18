package com.aggro.service.farmer;

import com.aggro.dto.farmers.FarmerProfileDto;
import com.aggro.model.FarmerProfileEntity;
import com.aggro.repository.FarmerProfileRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FarmerProfileServiceImpl implements FarmerProfileService{

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private FarmerProfileRepository farmerProfileRepository;

    @Override
    public FarmerProfileDto saveFarmerProfile(FarmerProfileDto farmerProfileDto) {

        FarmerProfileEntity farmerProfileEntity = this.dtoToEntity(farmerProfileDto);
        return this.entityToDto(this.farmerProfileRepository.save(farmerProfileEntity));
    }

    @Override
    public FarmerProfileDto getFarmerProfileById(Integer id) {

        FarmerProfileEntity farmerProfileEntity = this.farmerProfileRepository.findByFarmerId(id);
        return this.entityToDto(farmerProfileEntity);
    }


    // ********** This Function for Update Farmer Profile ***********
    @Override
    public FarmerProfileDto updateFarmerProfile(FarmerProfileDto farmerProfileDto, Integer id) {

        FarmerProfileEntity oldFarmerProfile = this.farmerProfileRepository.findById(id).get();

        oldFarmerProfile.setFarmerFirstName(farmerProfileDto.getFarmerFirstName());
        oldFarmerProfile.setFarmerLastName(farmerProfileDto.getFarmerLastName());
        oldFarmerProfile.setFarmerCity(farmerProfileDto.getFarmerCity());
        oldFarmerProfile.setFarmerDist(farmerProfileDto.getFarmerDist());
        oldFarmerProfile.setFarmerState(farmerProfileDto.getFarmerState());
        oldFarmerProfile.setFarmerPhoneNumber(farmerProfileDto.getFarmerPhoneNumber());
        oldFarmerProfile.setFarmerCrops(farmerProfileDto.getFarmerCrops());
        oldFarmerProfile.setFarmerArea(farmerProfileDto.getFarmerArea());

        return this.entityToDto(this.farmerProfileRepository.save(oldFarmerProfile));
    }

    // ********** This Function for get all Farmer Profile ***********
    @Override
    public List<FarmerProfileEntity> getAllFarmerProfiles() {

        List<FarmerProfileEntity> farmerProfileEntity = this.farmerProfileRepository.findAll();

        return farmerProfileEntity;
    }


    // ********** This Function for search Farmer Profile ***********
    @Override
    public List<FarmerProfileEntity> getSearchFarmerProfile(String data) {

            List<FarmerProfileEntity>  farmerProfileEntities = this.farmerProfileRepository.findByFarmerFirstNameContainingOrFarmerCropsContaining(data, data);
            System.out.println("Data is : "+farmerProfileEntities);


            return farmerProfileEntities;

    }


    //**********************************************************************
    //***** THis function for Converting Entity object to Dto Object **********
    private FarmerProfileDto entityToDto (FarmerProfileEntity farmerProfileEntity){

        FarmerProfileDto farmerProfileDto = this.modelMapper.map(farmerProfileEntity, FarmerProfileDto.class);
        return farmerProfileDto;
    }

    //***** THis function for Converting Dto object to Entity Object **********
    private FarmerProfileEntity dtoToEntity (FarmerProfileDto farmerProfileDto){

        FarmerProfileEntity farmerProfileEntity = this.modelMapper.map(farmerProfileDto, FarmerProfileEntity.class);

        return farmerProfileEntity;
    }
}
