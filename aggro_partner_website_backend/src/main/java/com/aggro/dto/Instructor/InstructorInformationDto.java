package com.aggro.dto.Instructor;

import org.springframework.web.multipart.MultipartFile;

public class InstructorInformationDto {

    private Long id;

    private String infoTitle;
    private String infoSubTitle;
    private String infoContent;
    private String infoRelatedCrops;
    private String infoInstructorName;
    private String infoInstructorPhone;
    private Long instructorId;
    private MultipartFile image;
    private byte[] imageData;

    private String infoImagePath;




    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInfoTitle() {
        return infoTitle;
    }

    public void setInfoTitle(String infoTitle) {
        this.infoTitle = infoTitle;
    }

    public String getInfoSubTitle() {
        return infoSubTitle;
    }

    public void setInfoSubTitle(String infoSubTitle) {
        this.infoSubTitle = infoSubTitle;
    }

    public String getInfoContent() {
        return infoContent;
    }

    public void setInfoContent(String infoContent) {
        this.infoContent = infoContent;
    }

    public String getInfoRelatedCrops() {
        return infoRelatedCrops;
    }

    public void setInfoRelatedCrops(String infoRelatedCrops) {
        this.infoRelatedCrops = infoRelatedCrops;
    }

    public String getInfoInstructorName() {
        return infoInstructorName;
    }

    public void setInfoInstructorName(String infoInstructorName) {
        this.infoInstructorName = infoInstructorName;
    }

    public String getInfoInstructorPhone() {
        return infoInstructorPhone;
    }

    public void setInfoInstructorPhone(String infoInstructorPhone) {
        this.infoInstructorPhone = infoInstructorPhone;
    }

    public Long getInstructorId() {
        return instructorId;
    }

    public void setInstructorId(Long instructorId) {
        this.instructorId = instructorId;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }

    public String getInfoImagePath() {
        return infoImagePath;
    }

    public void setInfoImagePath(String infoImagePath) {
        this.infoImagePath = infoImagePath;
    }
}
