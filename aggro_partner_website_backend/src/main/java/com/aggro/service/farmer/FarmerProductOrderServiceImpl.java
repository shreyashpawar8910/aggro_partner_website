package com.aggro.service.farmer;

import com.aggro.dto.customer.ProductOrderDto;
import com.aggro.model.ProductOrderEntity;
import com.aggro.repository.PlaceOrderRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FarmerProductOrderServiceImpl implements FarmerProductOrderService{

    @Autowired
    private PlaceOrderRepository placeOrderRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<ProductOrderEntity> getFarmerNewOrdersByFarmerId(Integer id) {
        List<ProductOrderEntity> productOrderEntities = placeOrderRepository.findByOrderFarmerIdAndOrderStatus(id, "place");
        return productOrderEntities;
    }

    @Override
    public List<ProductOrderEntity> getFarmerDeliverdOrdersByFarmerId(Integer id) {
        List<ProductOrderEntity> productOrderEntities = placeOrderRepository.findByOrderFarmerIdAndOrderStatusNot(id, "place");
        return productOrderEntities;
    }


    //***** THis function for Converting Entity object to Dto Object **********
    private ProductOrderDto entityToDto (ProductOrderEntity productOrderEntity){

        ProductOrderDto productOrderDto = this.modelMapper.map(productOrderEntity, ProductOrderDto.class);
        return productOrderDto;
    }

    //***** THis function for Converting Dto object to Entity Object **********
    private ProductOrderEntity dtoToEntity (ProductOrderDto productOrderDto){

        ProductOrderEntity productOrderEntity = this.modelMapper.map(productOrderDto, ProductOrderEntity.class);

        return productOrderEntity;
    }
}
