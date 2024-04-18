package com.aggro.service.farmer;

import com.aggro.dto.AggroUserDto;
import com.aggro.dto.farmers.FarmerProductUploadDto;
import com.aggro.dto.farmers.FarmerProfileDto;
import com.aggro.model.FarmerProducts;
import com.aggro.repository.FarmerRepository;
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
public class FarmerProductServiceImpl implements FarmerProductService {

    @Autowired
    private FarmerRepository farmerRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public FarmerProducts saveProduct(final FarmerProductUploadDto farmerProducts) {
        String filePath = null;
        if (farmerProducts.getImage() != null) {
            byte[] bytes;
            try {
                bytes = farmerProducts.getImage().getBytes();
                filePath = "G:/College/New Start/Aggro Partner/Images/Farmer_Products/" + farmerProducts.getImage().getOriginalFilename();

                // Create the file on disk
                File imageFile = new File(filePath);

                // Write the bytes to the file
                FileUtils.writeByteArrayToFile(imageFile, bytes);
                farmerProducts.setImagePath(filePath);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        return farmerRepository.save(this.dtoToEntity(farmerProducts));
    }

    @Override
    public List<FarmerProductUploadDto> getAllProduct(Integer id) {
        List<FarmerProducts> farmerProductsList = farmerRepository.findByFarmerId(id);

        return farmerProductsList.stream()
                .map(this::getImagePathToImageFile)
                .collect(Collectors.toList());

    }

    @Override
    public FarmerProductUploadDto getFarmerIdUsingProductId(Integer id) {

        FarmerProducts farmerProducts = this.farmerRepository.findById(id).get();

        return this.entityToDto(farmerProducts);
    }


    public FarmerProductUploadDto getImagePathToImageFile(FarmerProducts farmerProducts) {
        try {
            Path imagePath = Paths.get(farmerProducts.getImagePath());
            byte[] imageData = Files.readAllBytes(imagePath);

            FarmerProductUploadDto farmerProductUploadDto = new FarmerProductUploadDto();
            farmerProductUploadDto.setImageData(imageData);
            farmerProductUploadDto.setId(farmerProducts.getId());
            farmerProductUploadDto.setFarmerId(farmerProducts.getFarmerId());
            farmerProductUploadDto.setProductName(farmerProducts.getProductName());
            farmerProductUploadDto.setProductSubName(farmerProducts.getProductSubName());
            farmerProductUploadDto.setQuantityKg(farmerProducts.getQuantityKg());
            farmerProductUploadDto.setPrice(farmerProducts.getPrice());
            farmerProductUploadDto.setPhoneNumber(farmerProducts.getPhoneNumber());
            farmerProductUploadDto.setCity(farmerProducts.getCity());
            farmerProductUploadDto.setDist(farmerProducts.getDist());
            farmerProductUploadDto.setAddress(farmerProducts.getAddress());
            farmerProductUploadDto.setZipCode(farmerProducts.getZipCode());

            return farmerProductUploadDto;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }



    @Override
    public void deleteFarmerProduct(Integer id) {
        this.farmerRepository.deleteById(id);
    }


    // ***************** Get All Prducts For Customer ***************
    @Override
    public List<FarmerProductUploadDto> getAllProductForCustomer() {
        List<FarmerProducts> farmerProductsList = farmerRepository.findAll();


        return farmerProductsList.stream()
                .map(this::getImagePathToImageFile)
                .collect(Collectors.toList());
    }


    // ***************** Get  Products By Id ***************
    @Override
    public FarmerProductUploadDto getFarmerProductById(Integer id) {
        FarmerProducts farmerProducts = farmerRepository.findById(id).get();
        return getImagePathToImageFile(farmerProducts) ;
    }


    private FarmerProducts dtoToEntity(final FarmerProductUploadDto farmerProductUploadDto) {

        return this.modelMapper.map(farmerProductUploadDto, FarmerProducts.class);
    }

    private FarmerProductUploadDto entityToDto(final FarmerProducts farmerProducts) {

        return this.modelMapper.map(farmerProducts, FarmerProductUploadDto.class);
    }


}
