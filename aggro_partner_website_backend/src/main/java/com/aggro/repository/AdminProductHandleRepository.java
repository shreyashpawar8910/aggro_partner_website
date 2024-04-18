package com.aggro.repository;

import com.aggro.model.ProductOrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminProductHandleRepository extends JpaRepository<ProductOrderEntity, Integer> {
    List<ProductOrderEntity> findByOrderStatus(String place);
}
