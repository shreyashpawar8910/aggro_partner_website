package com.aggro.repository;

import com.aggro.model.FarmerProducts;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FarmerRepository extends JpaRepository<FarmerProducts, Integer> {

    List<FarmerProducts> findByFarmerId(Integer id);
}
