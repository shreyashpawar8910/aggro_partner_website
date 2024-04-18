package com.aggro.service.farmer;

import com.aggro.dto.farmers.FarmerProfileDto;
import com.aggro.model.FarmerProfileEntity;

import java.util.List;

public interface FarmerProfileService {
    public FarmerProfileDto saveFarmerProfile(FarmerProfileDto farmerProfileDto);

    public FarmerProfileDto getFarmerProfileById(Integer id);

    public FarmerProfileDto updateFarmerProfile(FarmerProfileDto farmerProfileDto, Integer id);

    public List<FarmerProfileEntity> getAllFarmerProfiles();

    public List<FarmerProfileEntity> getSearchFarmerProfile(String data);


}
