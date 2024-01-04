package com.sampleestore.FullStackEstore.Service.IMPL;

import com.sampleestore.FullStackEstore.DTO.ProductDTO;
import com.sampleestore.FullStackEstore.Entity.ProductEntity;
import com.sampleestore.FullStackEstore.Repository.ProductRepository;
import com.sampleestore.FullStackEstore.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public List<ProductEntity> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public Optional<ProductEntity> getProductByID(Integer productID) {
        if (productRepository.existsById(productID) && productID > 0) {
            return productRepository.findById(productID);
        } else {
            return Optional.empty();
        }
    }

    @Override
    public List<ProductEntity> filterProductsByCategory(String productCategory) {
        List<ProductEntity> allProducts = getAllProduct();
        List<ProductEntity> filteredByCategory = new ArrayList<>();
        for(ProductEntity productFilter : allProducts) {
            if(productFilter.getProductCategory().equalsIgnoreCase(productCategory)){
                filteredByCategory.add(productFilter);
            }
        }
        return filteredByCategory;
    }

    @Override
    public List<ProductEntity> filterProductsBySubcategory(String productCategory, String productSubcategory) {
        List<ProductEntity> filteredBySubcategory = new ArrayList<>();
        for(ProductEntity subCategoryFilter : filterProductsByCategory(productCategory)){
            if(subCategoryFilter.getProductSubcategory().equalsIgnoreCase(productSubcategory)){
                filteredBySubcategory.add(subCategoryFilter);
            }
        }
        return filteredBySubcategory;
    }
}