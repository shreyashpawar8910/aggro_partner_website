package com.aggro.controller;

import com.aggro.dto.customer.ProductOrderDto;
import com.aggro.service.customer.OrderPlaceService;
import com.aggro.service.farmer.FarmerProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class CustomerController {

    @Autowired
    private FarmerProductService farmerProductService;

    @Autowired
    private OrderPlaceService orderPlaceService;

    @GetMapping("/getProductsForCustomer")
    public ResponseEntity<?> getAllFarmerProducts(){
        return new ResponseEntity<>(farmerProductService.getAllProductForCustomer(), HttpStatus.OK);
    }

    @GetMapping("/getFarmerProductById/{id}")
    public ResponseEntity<?> getFarmerProductById(@PathVariable Integer id){

        return new ResponseEntity<>(this.farmerProductService.getFarmerProductById(id), HttpStatus.OK);
    }


    @PostMapping("/placeOrder")
    public ResponseEntity<?> placeOrder(@RequestBody ProductOrderDto productOrderDto){
        return new ResponseEntity<>(this.orderPlaceService.placeOrder(productOrderDto), HttpStatus.CREATED);
    }

    @GetMapping("/getPlacedOrdersByCustomerId/{id}")
    public ResponseEntity<?> getPlacedOrdersByCustomerId(@PathVariable Integer id){
        return new ResponseEntity<>(this.orderPlaceService.getPlacedOrdersByCustomerId(id), HttpStatus.OK);
    }

    @GetMapping("/getDeliverdOrdersByCustomerId/{id}")
    public ResponseEntity<?> getDeliverdOrdersByCustomerId(@PathVariable Integer id){
        return new ResponseEntity<>(this.orderPlaceService.getDeliverdOrdersByCustomerId(id), HttpStatus.OK);
    }

}
