package com.sampleestore.FullStackEstore.Service;

import com.sampleestore.FullStackEstore.Entity.ProductEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {

    List<ProductEntity> getAllProduct();
    Optional<ProductEntity> getProductByID(Integer productID);
    List<ProductEntity> filterProductsByCategory(String productCategory);
    List<ProductEntity> filterProductsBySubcategory(String productCategory, String productSubcategory);
}