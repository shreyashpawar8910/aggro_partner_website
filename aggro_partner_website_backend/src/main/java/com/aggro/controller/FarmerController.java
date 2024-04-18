package com.aggro.controller;

import com.aggro.dto.Instructor.InstructorSessionDto;
import com.aggro.dto.farmers.FarmerProductUploadDto;
import com.aggro.dto.farmers.FarmerProfileDto;
import com.aggro.service.customer.OrderPlaceService;
import com.aggro.service.farmer.FarmerProductOrderService;
import com.aggro.service.farmer.FarmerProductService;
import com.aggro.service.farmer.FarmerProfileService;
import com.aggro.service.farmer.FarmerSessionWithInstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin("*")
public class FarmerController {

    @Autowired
    private FarmerProductService farmerProductService;

    @Autowired
    private FarmerProfileService farmerProfileService;

    @Autowired
    private FarmerSessionWithInstructor farmerSessionWithInstructor;

    @Autowired
    private OrderPlaceService orderPlaceService;

    @Autowired
    private FarmerProductOrderService farmerProductOrderService;


    @PostMapping("/saveFarmerProduct")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> saveFarmerProduct(@ModelAttribute FarmerProductUploadDto farmerProducts) {

        return new ResponseEntity<>(farmerProductService.saveProduct(farmerProducts), HttpStatus.CREATED);
    }

    @GetMapping("/getAllFarmerProduct/{id}")
    public ResponseEntity<?> getAllProducts(@PathVariable Integer id){
        return new ResponseEntity<>(farmerProductService.getAllProduct(id), HttpStatus.OK);
    }

    @DeleteMapping("/deleteFarmerProduct/{id}")
    public void deletefarmerProductById(@PathVariable Integer id){
        this.farmerProductService.deleteFarmerProduct(id);
    }

    @GetMapping("/getFarmerIdUsingProductId/{id}")
    public ResponseEntity<?> getFarmerIdUsingProductId(@PathVariable Integer id){
        return new ResponseEntity<>(this.farmerProductService.getFarmerIdUsingProductId(id), HttpStatus.OK);
    }


    //**************************************************************************
    //**************************************************************************
    //************* Farmer Profile Controllers ********************************


    //*********** Controller For Create Farmer Profile *************
    @PostMapping("/saveFarmerProfile")
    public ResponseEntity<?> saveFarmerProfile(@RequestBody FarmerProfileDto farmerProfileDto){
        return new ResponseEntity<>(this.farmerProfileService.saveFarmerProfile(farmerProfileDto), HttpStatus.CREATED);
    }

    //*********** Controller For get Farmer Profile By Id *************
    @GetMapping("/getFarmerProfileById/{id}")
    public ResponseEntity<?> getFarmerProfileById(@PathVariable Integer id){

        return new ResponseEntity<>(farmerProfileService.getFarmerProfileById(id), HttpStatus.OK);
    }


    //*********** Controller For get Farmer Profile By Farmer Id *************
//    @GetMapping("/getFarmerProfileByFarmerId/{farmerId}")
//    public ResponseEntity<?> getFarmerProfileByFarmerId(@PathVariable Integer farmerId){
//
//    }

    //*********** Controller For Update Farmer Profile  *************
    @PostMapping("/updateFarmerProfile/{id}")
    public ResponseEntity<?> updateFarmerProfile (@RequestBody FarmerProfileDto farmerProfileDto, @PathVariable Integer id){
        return new ResponseEntity<>(this.farmerProfileService.updateFarmerProfile(farmerProfileDto, id), HttpStatus.CREATED);
    }


    //*********** Controller For get All Farmers Profiles  *************

    @GetMapping("/getAllFarmerProfiles")
    public ResponseEntity<?> getAllFarmerProfiles(){
        return new ResponseEntity<>(this.farmerProfileService.getAllFarmerProfiles(), HttpStatus.OK);
    }

    @GetMapping("/getSearchFarmerProfile/{data}")
    public ResponseEntity<?> getSearchFarmerProfile(@PathVariable String data){

        return new ResponseEntity<>(this.farmerProfileService.getSearchFarmerProfile(data), HttpStatus.OK);
    }


    //*********** Controller For Book Farmer Session with Instructor  *************

    @PostMapping("/bookFarmerSessionWithInstructor")
    public ResponseEntity<?> bookSessionwithInstructor(@RequestBody InstructorSessionDto instructorSessionDto){
        return new ResponseEntity<>(this.farmerSessionWithInstructor.bookSessionwithInstructor(instructorSessionDto), HttpStatus.CREATED);
    }


    // *********************************************************************************
    //**********************************************************************************
    //************** Controllers for Farmer Order's ***********************************


    //******************** Controller for New Farmer's Order's **************************

    @GetMapping("/getFarmerNewOrdersByFarmerId/{id}")
    public ResponseEntity<?> getFarmerNewOrdersByFarmerId(@PathVariable Integer id){
        return new ResponseEntity<>(this.farmerProductOrderService.getFarmerNewOrdersByFarmerId(id), HttpStatus.OK);
    }

    @GetMapping("/getFarmerDeliverdOrdersByFarmerId/{id}")
    public ResponseEntity<?> getFarmerDeliverdOrdersByFarmerId(@PathVariable Integer id){
        return new ResponseEntity<>(this.farmerProductOrderService.getFarmerDeliverdOrdersByFarmerId(id), HttpStatus.OK);
    }


}
