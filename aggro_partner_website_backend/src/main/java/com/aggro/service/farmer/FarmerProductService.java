package com.aggro.service.farmer;

import com.aggro.dto.farmers.FarmerProductUploadDto;
import com.aggro.dto.farmers.FarmerProfileDto;
import com.aggro.model.FarmerProducts;

import java.util.List;

public interface FarmerProductService {
    public FarmerProducts saveProduct(final FarmerProductUploadDto farmerProducts);

    public List<FarmerProductUploadDto> getAllProduct(Integer id);

    public FarmerProductUploadDto getFarmerIdUsingProductId(Integer id);

    public void deleteFarmerProduct(Integer id);

    public List<FarmerProductUploadDto> getAllProductForCustomer();

    public FarmerProductUploadDto getFarmerProductById(Integer id);



}
