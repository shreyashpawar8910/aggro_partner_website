package com.aggro.service.admin;

import com.aggro.model.ProductOrderEntity;

import java.util.List;

public interface AdminOrderHandleService {

    public List<ProductOrderEntity> getAdminPlacedOrders();
    public List<ProductOrderEntity> getAdminShippedOrders();
    public List<ProductOrderEntity> getAdminOutForDeliveryOrders();
    public List<ProductOrderEntity> getAdminDeliverdOrders();

    public ProductOrderEntity changeOrderStatusForAdmin(Integer id, String orderStatus);

    public ProductOrderEntity changeOrderStatusOfDeliveryForAdmin(Integer id, ProductOrderEntity productOrderEntity);

}
