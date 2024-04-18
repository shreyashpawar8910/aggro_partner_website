package com.aggro.service.customer;

import com.aggro.dto.Instructor.InstructorProfileDto;
import com.aggro.dto.customer.ProductOrderDto;
import com.aggro.model.FarmerProducts;
import com.aggro.model.InstructorProfileEntity;
import com.aggro.model.ProductOrderEntity;
import com.aggro.repository.FarmerRepository;
import com.aggro.repository.PlaceOrderRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderPlaceServiceImpl implements OrderPlaceService{

    @Autowired
    private PlaceOrderRepository placeOrderRepository;

    @Autowired
    private FarmerRepository farmerRepository;



    @Autowired
    private ModelMapper modelMapper;


    @Override
    public ProductOrderDto placeOrder(ProductOrderDto productOrderDto) {

        ProductOrderEntity productOrderEntity = this.placeOrderRepository.save(this.dtoToEntity(productOrderDto));


        // ********* This three lines for subtract Ordered Quantity from Total Quantity ***************
        FarmerProducts oldFarmerProducts = this.farmerRepository.findById(productOrderDto.getOrderProductId().intValue()).get();
        oldFarmerProducts.setQuantityKg(oldFarmerProducts.getQuantityKg()-productOrderDto.getOrderQuantity());
        this.farmerRepository.save(oldFarmerProducts);

        return this.entityToDto(productOrderEntity);
    }

    @Override
    public List<ProductOrderEntity> getPlacedOrdersByCustomerId(Integer id) {

        List<ProductOrderEntity> productOrderEntities = this.placeOrderRepository.findAllByOrderCustomerIdAndOrderStatusNot(id, "orderDeliverd");

        return productOrderEntities;
    }

    @Override
    public List<ProductOrderEntity> getDeliverdOrdersByCustomerId(Integer id) {
        List<ProductOrderEntity> productOrderEntities = this.placeOrderRepository.findAllByOrderCustomerIdAndOrderStatus(id, "orderDeliverd");

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
