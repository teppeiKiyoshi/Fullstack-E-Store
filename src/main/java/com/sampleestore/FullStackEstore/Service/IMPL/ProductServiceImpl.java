package com.sampleestore.FullStackEstore.Service.IMPL;

import com.sampleestore.FullStackEstore.Entity.ProductEntity;
import com.sampleestore.FullStackEstore.Repository.ProductRepository;
import com.sampleestore.FullStackEstore.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

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
}