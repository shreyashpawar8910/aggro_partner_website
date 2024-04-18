package com.aggro.controller;

import com.aggro.model.ProductOrderEntity;
import com.aggro.service.admin.AdminOrderHandleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminOrderHandleService adminOrderHandleService;


    // *************** Controller for get Placed Orders for Admin **************

    @GetMapping("/getAdminPlacedOrders")
    public ResponseEntity<?> getAdminPlacedOrders(){
        return new ResponseEntity<>(this.adminOrderHandleService.getAdminPlacedOrders(), HttpStatus.OK);
    }


    // *************** Controller for get Shipped Orders for Admin **************

    @GetMapping("/getAdminShippedOrders")
    public ResponseEntity<?> getAdminShippedOrders(){
        return new ResponseEntity<>(this.adminOrderHandleService.getAdminShippedOrders(), HttpStatus.OK);
    }


    // *************** Controller for get Out For Delivery Orders for Admin **************

    @GetMapping("/getAdminOutForDeliveryOrders")
    public ResponseEntity<?> getAdminOutForDeliveryOrders(){
        return new ResponseEntity<>(this.adminOrderHandleService.getAdminOutForDeliveryOrders(), HttpStatus.OK);
    }


    // *************** Controller for get Deliverd Orders for Admin **************

    @GetMapping("/getAdminDeliverdOrders")
    public ResponseEntity<?> getAdminDeliverdOrders(){
        return new ResponseEntity<>(this.adminOrderHandleService.getAdminDeliverdOrders(), HttpStatus.OK);
    }

    @PostMapping("/changeOrderStatusForAdmin/{id}")
    public ResponseEntity<?> changeOrderStatusForAdmin(@PathVariable Integer id,  @RequestBody String orderStatus){
        return new ResponseEntity<>(this.adminOrderHandleService.changeOrderStatusForAdmin(id, orderStatus), HttpStatus.CREATED);
    }

    @PostMapping("/changeOrderStatusOfDeliveryForAdmin/{id}")
    public ResponseEntity<?> changeOrderStatusOfDeliveryForAdmin(@PathVariable Integer id, @RequestBody ProductOrderEntity productOrderEntity){
        return new ResponseEntity<>(this.adminOrderHandleService.changeOrderStatusOfDeliveryForAdmin(id, productOrderEntity), HttpStatus.CREATED);

    }

}
