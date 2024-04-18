package com.aggro.controller;

import com.aggro.dto.AggroUserDto;

import com.aggro.model.AggroUser;
import com.aggro.service.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@RestController
@CrossOrigin("*")
public class UserRegisterController {

    @Autowired
    private UserService userService;

    @PostMapping("/saveAggroUser")
    public ResponseEntity<?> saveAggro(@RequestBody AggroUserDto aggroUserDto){
        return new ResponseEntity<>(userService.saveAggroUser(aggroUserDto), HttpStatus.CREATED);
    }

    @PostMapping("/userLogin")
    public ResponseEntity<?> loginAggroUser(@RequestBody AggroUserDto aggroUserDto){


        return new ResponseEntity<>(userService.loginUser(aggroUserDto), HttpStatus.OK);
    }



}
