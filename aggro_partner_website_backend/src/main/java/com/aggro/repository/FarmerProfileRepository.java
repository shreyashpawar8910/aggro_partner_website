package com.aggro.repository;

import com.aggro.model.FarmerProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FarmerProfileRepository extends JpaRepository<FarmerProfileEntity, Integer> {
    FarmerProfileEntity findByFarmerId(Integer id);

    List<FarmerProfileEntity> findByFarmerFirstNameContainingOrFarmerCropsContaining(String data, String data2);
}
