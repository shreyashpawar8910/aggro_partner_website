package com.aggro.dto.Instructor;

public class InstructorSessionDto {

    private Long id;

    private Long farmerId;
    private Long instructorId;
    private String sessionDate;

    private String sessionFarmerFirstName;
    private String sessionFarmerLastName;
    private String sessionFarmerCity;
    private String sessionFarmerDist;
    private String sessionFarmerState;
    private String sessionFarmerPhoneNumber;
    private String sessionFarmerCrop;
    private Long sessionFarmerArea;
    private String sessionDone;


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

    public Long getInstructorId() {
        return instructorId;
    }

    public void setInstructorId(Long instructorId) {
        this.instructorId = instructorId;
    }

    public String getSessionDate() {
        return sessionDate;
    }

    public void setSessionDate(String sessionDate) {
        this.sessionDate = sessionDate;
    }

    public String getSessionFarmerFirstName() {
        return sessionFarmerFirstName;
    }

    public void setSessionFarmerFirstName(String sessionFarmerFirstName) {
        this.sessionFarmerFirstName = sessionFarmerFirstName;
    }

    public String getSessionFarmerLastName() {
        return sessionFarmerLastName;
    }

    public void setSessionFarmerLastName(String sessionFarmerLastName) {
        this.sessionFarmerLastName = sessionFarmerLastName;
    }

    public String getSessionFarmerCity() {
        return sessionFarmerCity;
    }

    public void setSessionFarmerCity(String sessionFarmerCity) {
        this.sessionFarmerCity = sessionFarmerCity;
    }

    public String getSessionFarmerDist() {
        return sessionFarmerDist;
    }

    public void setSessionFarmerDist(String sessionFarmerDist) {
        this.sessionFarmerDist = sessionFarmerDist;
    }

    public String getSessionFarmerState() {
        return sessionFarmerState;
    }

    public void setSessionFarmerState(String sessionFarmerState) {
        this.sessionFarmerState = sessionFarmerState;
    }

    public String getSessionFarmerPhoneNumber() {
        return sessionFarmerPhoneNumber;
    }

    public void setSessionFarmerPhoneNumber(String sessionFarmerPhoneNumber) {
        this.sessionFarmerPhoneNumber = sessionFarmerPhoneNumber;
    }

    public String getSessionFarmerCrop() {
        return sessionFarmerCrop;
    }

    public void setSessionFarmerCrop(String sessionFarmerCrop) {
        this.sessionFarmerCrop = sessionFarmerCrop;
    }

    public Long getSessionFarmerArea() {
        return sessionFarmerArea;
    }

    public void setSessionFarmerArea(Long sessionFarmerArea) {
        this.sessionFarmerArea = sessionFarmerArea;
    }

    public String getSessionDone() {
        return sessionDone;
    }

    public void setSessionDone(String sessionDone) {
        this.sessionDone = sessionDone;
    }
}
