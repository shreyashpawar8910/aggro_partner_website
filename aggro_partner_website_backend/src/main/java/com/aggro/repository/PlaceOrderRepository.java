package com.aggro.repository;

import com.aggro.model.ProductOrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceOrderRepository extends JpaRepository<ProductOrderEntity, Integer> {



    List<ProductOrderEntity> findAllByOrderCustomerIdAndOrderStatusNot(Integer id, String orderDeliverd);

    List<ProductOrderEntity> findAllByOrderCustomerIdAndOrderStatus(Integer id, String orderDeliverd);
    

    List<ProductOrderEntity> findByOrderFarmerIdAndOrderStatus(Integer id, String place);

    List<ProductOrderEntity> findByOrderFarmerIdAndOrderStatusNot(Integer id, String place);
}
