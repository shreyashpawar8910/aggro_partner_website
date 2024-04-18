package com.aggro.service.customer;

import com.aggro.dto.customer.ProductOrderDto;
import com.aggro.model.ProductOrderEntity;

import java.util.List;

public interface OrderPlaceService {

    public ProductOrderDto placeOrder(ProductOrderDto productOrderDto);

    public List<ProductOrderEntity> getPlacedOrdersByCustomerId(Integer id);

    public List<ProductOrderEntity> getDeliverdOrdersByCustomerId(Integer id);


}
