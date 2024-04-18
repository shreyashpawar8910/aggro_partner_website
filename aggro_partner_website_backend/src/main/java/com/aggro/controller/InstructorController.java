package com.aggro.controller;

import com.aggro.dto.Instructor.InstructorAdvertisementDto;
import com.aggro.dto.Instructor.InstructorInformationDto;
import com.aggro.dto.Instructor.InstructorProfileDto;
import com.aggro.service.Instructor.InstructorAdvertiseService;
import com.aggro.service.Instructor.InstructorInformationService;
import com.aggro.service.Instructor.InstructorService;
import com.aggro.service.farmer.FarmerSessionWithInstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class InstructorController {

    @Autowired
    private InstructorService instructorService;

    @Autowired
    private FarmerSessionWithInstructor farmerSessionWithInstructor;

    @Autowired
    private InstructorInformationService instructorInformationService;

    @Autowired
    private InstructorAdvertiseService instructorAdvertiseService;

    @PostMapping("/saveInstructorProfile")
    public ResponseEntity<?> saveInstructorProfile(@RequestBody InstructorProfileDto instructorProfileDto){

        return new ResponseEntity<>(instructorService.saveIstructorProfile(instructorProfileDto), HttpStatus.CREATED);
    }

    //***** Controller for get instructor by Id ********

    @GetMapping("/getInstructorByInstructorId/{instructorId}")
    public ResponseEntity<?> getInstructorByInstructorId(@PathVariable Integer instructorId){
        return new ResponseEntity<>(instructorService.getInstructorByInstructorId(instructorId), HttpStatus.OK);
    }

    // ***** Controller for update instructor *******

    @PostMapping("/updateInstructorProfile/{id}")
    public ResponseEntity<?> updateInstructorProfile(@RequestBody InstructorProfileDto instructorProfileDto, @PathVariable Integer id){

        return new ResponseEntity<>(instructorService.updateInstructor(instructorProfileDto, id), HttpStatus.CREATED);
    }

    // ***** Controller for get All instructor *******
    @GetMapping("/getAllInstructors")
    public ResponseEntity<?> getAllInstructors (){

        return new ResponseEntity<>(this.instructorService.getAllInstructors(), HttpStatus.OK);
    }


    // ***** Controller for Search instructor *******
    @GetMapping("/getSearchInstructorProfile/{data}")
    public ResponseEntity<?> getSearchInstructorProfile(@PathVariable String data){
        return new ResponseEntity<>(this.instructorService.getSearchInstructors(data), HttpStatus.OK);
    }


    // ***** Controller for get All instructor Session By Id *******
    @GetMapping("/getInstructorBookedSession/{id}")
    public ResponseEntity<?> getInstructorBookedSessionsById(@PathVariable Integer id){

        return new ResponseEntity<>(this.farmerSessionWithInstructor.getInstructorBookedSessionsById(id), HttpStatus.OK);
    }


    // ***** Controller for Update SessionDone Status to Yes  *******

    @GetMapping("/updateSessionDoneYes/{id}")
    public ResponseEntity<?> updateSessionDoneYes(@PathVariable Integer id){

        return new ResponseEntity<>(this.farmerSessionWithInstructor.updateSessionDoneYes(id), HttpStatus.OK);
    }


    //***********************************************************
    // ***************** Instructor Information Controllers *****

    //******** Instructor Information Save Controller ***********

    @PostMapping("/saveInstructorInformation")
    public ResponseEntity<?> saveInstructorInformation(@ModelAttribute InstructorInformationDto instructorInformationDto){

        return new ResponseEntity<>(this.instructorInformationService.saveInstructorInformation(instructorInformationDto), HttpStatus.CREATED);
    }

    //******** Instructor Information get Research Blogs of Instructor By *Instructor login Id* Controller ***********
    @GetMapping("/instructorResearchBlogsByInstructorId/{id}")
    public ResponseEntity<?> getInstructorInfoById(@PathVariable Integer id){
        return new ResponseEntity<>(this.instructorInformationService.getInstructorInfoByInstructorId(id), HttpStatus.OK);
    }

    //******** Instructor Information get Research Blogs of Instructor By *Research Blog Id* Controller ***********

    @GetMapping("/getResearchBlogById/{id}")
    public ResponseEntity<?> getInfoByInfoId(@PathVariable Integer id){
        return new ResponseEntity<>(this.instructorInformationService.getInfoByInfoId(id), HttpStatus.OK);
    }

    //******** Update Research Blog Controller ***********
    @PostMapping("/updateInstructorInformation/{id}")
    public ResponseEntity<?> updateInstructorInformation(@RequestBody InstructorInformationDto instructorInformationDto, @PathVariable Integer id){
        return new ResponseEntity<>(this.instructorInformationService.updateInstructorInformation(instructorInformationDto, id), HttpStatus.CREATED);
    }

    //******** Delete Research Blog Controller ***********
    @DeleteMapping("/deleteInstructorInfo/{id}")
    public void deleteInfo(@PathVariable Integer id){
        this.instructorInformationService.deleteInfo(id);
    }

    //******** Get All Research Blog Controller ***********
    @GetMapping("/getAllResearchBlogs")
    public ResponseEntity<?> getAllResearchBlogs(){
        return new ResponseEntity<>(this.instructorInformationService.getAllResearchBlogs(), HttpStatus.OK);
    }


    //******** Search Research Blog Controller ***********
    @GetMapping("/getSearchResearchBlogs/{data}")
    public ResponseEntity<?> getSearchResearchBlogs(@PathVariable String data){
        return new ResponseEntity<>(this.instructorInformationService.getSearchResearchBlogs(data), HttpStatus.OK);
    }



    // ****************************************************************************
    // ************************ Instructor Advertisement Controller ***************

    @PostMapping("/saveInstructorAdvertisement")
    public ResponseEntity<?> saveInstructorAdvertisement(@ModelAttribute InstructorAdvertisementDto instructorAdvertisementDto){
        return new ResponseEntity<>(this.instructorAdvertiseService.saveInstructorAdvertise(instructorAdvertisementDto), HttpStatus.CREATED);
    }

    @GetMapping("/getAdvertisementByInstructorId/{id}")
    public ResponseEntity<?> getAdvertisementByInstructorId(@PathVariable Integer id){
        return new ResponseEntity<>(this.instructorAdvertiseService.getAdvertisementByInstructorId(id), HttpStatus.OK);
    }

    @GetMapping("/getAllAdvertisement")
    public ResponseEntity<?> getAllAdvertisement(){
        return new ResponseEntity<>(this.instructorAdvertiseService.getAllAdvertisement(), HttpStatus.OK);
    }

    @DeleteMapping("/deleteAdvertisement/{id}")
    public  void deleteAdvertisement(@PathVariable Integer id){
        this.instructorAdvertiseService.deleteAdvertisement(id);
    }

}
