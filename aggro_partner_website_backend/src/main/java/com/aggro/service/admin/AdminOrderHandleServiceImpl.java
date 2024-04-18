package com.aggro.service.admin;

import com.aggro.model.ProductOrderEntity;
import com.aggro.repository.AdminProductHandleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminOrderHandleServiceImpl implements AdminOrderHandleService{

    @Autowired
    private AdminProductHandleRepository adminProductHandleRepository;


    @Override
    public List<ProductOrderEntity> getAdminPlacedOrders() {
        List<ProductOrderEntity> productOrderEntities = this.adminProductHandleRepository.findByOrderStatus("place");
        return productOrderEntities;
    }

    @Override
    public List<ProductOrderEntity> getAdminShippedOrders() {
        List<ProductOrderEntity> productOrderEntities = this.adminProductHandleRepository.findByOrderStatus("shipped");
        return productOrderEntities;
    }

    @Override
    public List<ProductOrderEntity> getAdminOutForDeliveryOrders() {
        List<ProductOrderEntity> productOrderEntities = this.adminProductHandleRepository.findByOrderStatus("outForDelivery");
        return productOrderEntities;
    }

    @Override
    public List<ProductOrderEntity> getAdminDeliverdOrders() {
        List<ProductOrderEntity> productOrderEntities = this.adminProductHandleRepository.findByOrderStatus("orderDeliverd");
        return productOrderEntities;
    }

    @Override
    public ProductOrderEntity changeOrderStatusForAdmin(Integer id, String orderStatus) {

        ProductOrderEntity oldProductOrderEntity = this.adminProductHandleRepository.findById(id).get();

        oldProductOrderEntity.setOrderStatus(orderStatus);

        return this.adminProductHandleRepository.save(oldProductOrderEntity);
    }

    @Override
    public ProductOrderEntity changeOrderStatusOfDeliveryForAdmin(Integer id, ProductOrderEntity productOrderEntity) {

        ProductOrderEntity oldProductOrderEntity = this.adminProductHandleRepository.findById(id).get();

        oldProductOrderEntity.setActualDeliveredDate(productOrderEntity.getActualDeliveredDate());
        oldProductOrderEntity.setOrderStatus("orderDeliverd");

        return this.adminProductHandleRepository.save(oldProductOrderEntity);
    }


}
