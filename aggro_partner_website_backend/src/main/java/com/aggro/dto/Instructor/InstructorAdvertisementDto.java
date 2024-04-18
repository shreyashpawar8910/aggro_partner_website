package com.aggro.dto.Instructor;

import org.springframework.web.multipart.MultipartFile;

public class InstructorAdvertisementDto {

    private Long id;

    private Long instructorId;
    private String advImagePath;
    private MultipartFile image;
    private byte[] imageData;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getInstructorId() {
        return instructorId;
    }

    public void setInstructorId(Long instructorId) {
        this.instructorId = instructorId;
    }

    public String getAdvImagePath() {
        return advImagePath;
    }

    public void setAdvImagePath(String advImagePath) {
        this.advImagePath = advImagePath;
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
}
