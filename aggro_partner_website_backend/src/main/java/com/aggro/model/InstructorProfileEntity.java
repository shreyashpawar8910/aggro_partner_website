package com.aggro.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.*;

@Entity
public class InstructorProfileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private Long instructorId;
    private String instructorFirstName;
    private String instructorLastName;
    private String instructorSpeciliest;
    private int instructorExperiance;
    private String instructorEmail;
    private String instructorPhoneNumber;
    private String instructorCity;
    private String instructorState;
    private String instructorOpenToWork;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Long getInstructorId() {
        return instructorId;
    }

    public void setInstructorId(Long instructorId) {
        this.instructorId = instructorId;
    }

    public String getInstructorFirstName() {
        return instructorFirstName;
    }

    public void setInstructorFirstName(String instructorFirstName) {
        this.instructorFirstName = instructorFirstName;
    }

    public String getInstructorLastName() {
        return instructorLastName;
    }

    public void setInstructorLastName(String instructorLastName) {
        this.instructorLastName = instructorLastName;
    }

    public String getInstructorSpeciliest() {
        return instructorSpeciliest;
    }

    public void setInstructorSpeciliest(String instructorSpeciliest) {
        this.instructorSpeciliest = instructorSpeciliest;
    }

    public int getInstructorExperiance() {
        return instructorExperiance;
    }

    public void setInstructorExperiance(int instructorExperiance) {
        this.instructorExperiance = instructorExperiance;
    }

    public String getInstructorEmail() {
        return instructorEmail;
    }

    public void setInstructorEmail(String instructorEmail) {
        this.instructorEmail = instructorEmail;
    }

    public String getInstructorPhoneNumber() {
        return instructorPhoneNumber;
    }

    public void setInstructorPhoneNumber(String instructorPhoneNumber) {
        this.instructorPhoneNumber = instructorPhoneNumber;
    }

    public String getInstructorCity() {
        return instructorCity;
    }

    public void setInstructorCity(String instructorCity) {
        this.instructorCity = instructorCity;
    }

    public String getInstructorState() {
        return instructorState;
    }

    public void setInstructorState(String instructorState) {
        this.instructorState = instructorState;
    }

    public String getInstructorOpenToWork() {
        return instructorOpenToWork;
    }

    public void setInstructorOpenToWork(String instructorOpenToWork) {
        this.instructorOpenToWork = instructorOpenToWork;
    }
}
