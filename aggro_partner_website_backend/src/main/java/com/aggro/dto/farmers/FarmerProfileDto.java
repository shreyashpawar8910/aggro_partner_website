package com.aggro.dto.farmers;

public class FarmerProfileDto {

    private Long id;
    private Long farmerId;
    private String farmerFirstName;
    private String farmerLastName;
    private String farmerCity;
    private String farmerDist;
    private String farmerState;
    private String farmerPhoneNumber;
    private String farmerCrops;
    private Long farmerArea;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFarmerId() {
        return farmerId;
    }

    public void setFarmerId(Long farmerId) {
        this.farmerId = farmerId;
    }

    public String getFarmerFirstName() {
        return farmerFirstName;
    }

    public void setFarmerFirstName(String farmerFirstName) {
        this.farmerFirstName = farmerFirstName;
    }

    public String getFarmerLastName() {
        return farmerLastName;
    }

    public void setFarmerLastName(String farmerLastName) {
        this.farmerLastName = farmerLastName;
    }

    public String getFarmerCity() {
        return farmerCity;
    }

    public void setFarmerCity(String farmerCity) {
        this.farmerCity = farmerCity;
    }

    public String getFarmerDist() {
        return farmerDist;
    }

    public void setFarmerDist(String farmerDist) {
        this.farmerDist = farmerDist;
    }

    public String getFarmerState() {
        return farmerState;
    }

    public void setFarmerState(String farmerState) {
        this.farmerState = farmerState;
    }

    public String getFarmerPhoneNumber() {
        return farmerPhoneNumber;
    }

    public void setFarmerPhoneNumber(String farmerPhoneNumber) {
        this.farmerPhoneNumber = farmerPhoneNumber;
    }

    public String getFarmerCrops() {
        return farmerCrops;
    }

    public void setFarmerCrops(String farmerCrops) {
        this.farmerCrops = farmerCrops;
    }

    public Long getFarmerArea() {
        return farmerArea;
    }

    public void setFarmerArea(Long farmerArea) {
        this.farmerArea = farmerArea;
    }
}
