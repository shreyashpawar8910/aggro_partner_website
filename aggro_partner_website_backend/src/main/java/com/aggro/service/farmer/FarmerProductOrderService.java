package com.aggro.service.farmer;

import com.aggro.model.ProductOrderEntity;

import java.util.List;

public interface FarmerProductOrderService {

    List<ProductOrderEntity> getFarmerNewOrdersByFarmerId(Integer id);

    List<ProductOrderEntity> getFarmerDeliverdOrdersByFarmerId(Integer id);

}
