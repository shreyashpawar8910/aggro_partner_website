package com.aggro.model;

import jakarta.persistence.*;

@Entity
public class InstructorInformationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String infoTitle;
    private String infoSubTitle;

    @Column(length = 5000)
    private String infoContent;
    private String infoRelatedCrops;
    private String infoInstructorName;
    private String infoInstructorPhone;
    private Long instructorId;
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

    public String getInfoImagePath() {
        return infoImagePath;
    }

    public void setInfoImagePath(String infoImagePath) {
        this.infoImagePath = infoImagePath;
    }
}
