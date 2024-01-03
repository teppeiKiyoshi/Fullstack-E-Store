package com.sampleestore.FullStackEstore.Service;

import com.sampleestore.FullStackEstore.Entity.ProductEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {

    List<ProductEntity> getAllProduct();
    Optional<ProductEntity> getProductByID(Integer productID);
//    List<ProductEntity> filterUsingCategory(String productCategory);
//    List<ProductEntity> filterUsingSubcategory(String productSubcategory);
}