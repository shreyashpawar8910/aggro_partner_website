package com.aggro.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ProductOrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long orderProductId;
    private Long orderCustomerId;
    private Long orderFarmerId;

    private String orderProductName;
    private String orderProductSubName;

    private String orderPickupCity;
    private String orderPickupDist;
    private String orderPickupZipCode;
    private String orderPickupAddress;
    private String orderPickupPhoneNumber;

    private  Integer orderQuantity;
    private Double orderQuantityPrice;
    private Double orderGSTCharges;
    private Double orderDeliveryCharges;
    private Double orderTotalBill;

    private String orderDeliveryCustomerName;
    private String orderDeliveryCity;
    private String orderDeliveryTaluka;
    private String orderDeliveryDist;
    private String orderDeliveryAddress;
    private String orderDeliveryZipCode;
    private String orderDeliveryPhoneNumber;
    private String orderDeliveryEmailId;

    private String orderPlaceDate;
    private String orderDeliveryDate;


    private String actualDeliveredDate;
    private String orderStatus;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrderProductId() {
        return orderProductId;
    }

    public void setOrderProductId(Long orderProductId) {
        this.orderProductId = orderProductId;
    }

    public Long getOrderCustomerId() {
        return orderCustomerId;
    }

    public void setOrderCustomerId(Long orderCustomerId) {
        this.orderCustomerId = orderCustomerId;
    }

    public Long getOrderFarmerId() {
        return orderFarmerId;
    }

    public void setOrderFarmerId(Long orderFarmerId) {
        this.orderFarmerId = orderFarmerId;
    }

    public String getOrderProductName() {
        return orderProductName;
    }

    public void setOrderProductName(String orderProductName) {
        this.orderProductName = orderProductName;
    }

    public String getOrderProductSubName() {
        return orderProductSubName;
    }

    public void setOrderProductSubName(String orderProductSubName) {
        this.orderProductSubName = orderProductSubName;
    }

    public String getOrderPickupCity() {
        return orderPickupCity;
    }

    public void setOrderPickupCity(String orderPickupCity) {
        this.orderPickupCity = orderPickupCity;
    }

    public String getOrderPickupDist() {
        return orderPickupDist;
    }

    public void setOrderPickupDist(String orderPickupDist) {
        this.orderPickupDist = orderPickupDist;
    }

    public String getOrderPickupZipCode() {
        return orderPickupZipCode;
    }

    public void setOrderPickupZipCode(String orderPickupZipCode) {
        this.orderPickupZipCode = orderPickupZipCode;
    }

    public String getOrderPickupAddress() {
        return orderPickupAddress;
    }

    public void setOrderPickupAddress(String orderPickupAddress) {
        this.orderPickupAddress = orderPickupAddress;
    }

    public String getOrderPickupPhoneNumber() {
        return orderPickupPhoneNumber;
    }

    public void setOrderPickupPhoneNumber(String orderPickupPhoneNumber) {
        this.orderPickupPhoneNumber = orderPickupPhoneNumber;
    }

    public Integer getOrderQuantity() {
        return orderQuantity;
    }

    public void setOrderQuantity(Integer orderQuantity) {
        this.orderQuantity = orderQuantity;
    }

    public Double getOrderQuantityPrice() {
        return orderQuantityPrice;
    }

    public void setOrderQuantityPrice(Double orderQuantityPrice) {
        this.orderQuantityPrice = orderQuantityPrice;
    }

    public Double getOrderGSTCharges() {
        return orderGSTCharges;
    }

    public void setOrderGSTCharges(Double orderGSTCharges) {
        this.orderGSTCharges = orderGSTCharges;
    }

    public Double getOrderDeliveryCharges() {
        return orderDeliveryCharges;
    }

    public void setOrderDeliveryCharges(Double orderDeliveryCharges) {
        this.orderDeliveryCharges = orderDeliveryCharges;
    }

    public Double getOrderTotalBill() {
        return orderTotalBill;
    }

    public void setOrderTotalBill(Double orderTotalBill) {
        this.orderTotalBill = orderTotalBill;
    }

    public String getOrderDeliveryCustomerName() {
        return orderDeliveryCustomerName;
    }

    public void setOrderDeliveryCustomerName(String orderDeliveryCustomerName) {
        this.orderDeliveryCustomerName = orderDeliveryCustomerName;
    }

    public String getOrderDeliveryCity() {
        return orderDeliveryCity;
    }

    public void setOrderDeliveryCity(String orderDeliveryCity) {
        this.orderDeliveryCity = orderDeliveryCity;
    }

    public String getOrderDeliveryTaluka() {
        return orderDeliveryTaluka;
    }

    public void setOrderDeliveryTaluka(String orderDeliveryTaluka) {
        this.orderDeliveryTaluka = orderDeliveryTaluka;
    }

    public String getOrderDeliveryDist() {
        return orderDeliveryDist;
    }

    public void setOrderDeliveryDist(String orderDeliveryDist) {
        this.orderDeliveryDist = orderDeliveryDist;
    }

    public String getOrderDeliveryAddress() {
        return orderDeliveryAddress;
    }

    public void setOrderDeliveryAddress(String orderDeliveryAddress) {
        this.orderDeliveryAddress = orderDeliveryAddress;
    }

    public String getOrderDeliveryZipCode() {
        return orderDeliveryZipCode;
    }

    public void setOrderDeliveryZipCode(String orderDeliveryZipCode) {
        this.orderDeliveryZipCode = orderDeliveryZipCode;
    }

    public String getOrderDeliveryPhoneNumber() {
        return orderDeliveryPhoneNumber;
    }

    public void setOrderDeliveryPhoneNumber(String orderDeliveryPhoneNumber) {
        this.orderDeliveryPhoneNumber = orderDeliveryPhoneNumber;
    }

    public String getOrderDeliveryEmailId() {
        return orderDeliveryEmailId;
    }

    public void setOrderDeliveryEmailId(String orderDeliveryEmailId) {
        this.orderDeliveryEmailId = orderDeliveryEmailId;
    }

    public String getOrderPlaceDate() {
        return orderPlaceDate;
    }

    public void setOrderPlaceDate(String orderPlaceDate) {
        this.orderPlaceDate = orderPlaceDate;
    }

    public String getOrderDeliveryDate() {
        return orderDeliveryDate;
    }

    public void setOrderDeliveryDate(String orderDeliveryDate) {
        this.orderDeliveryDate = orderDeliveryDate;
    }

    public String getActualDeliveredDate() {
        return actualDeliveredDate;
    }

    public void setActualDeliveredDate(String actualDeliveredDate) {
        this.actualDeliveredDate = actualDeliveredDate;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }
}
