package com.sampleestore.FullStackEstore.Controller;

import com.sampleestore.FullStackEstore.Entity.ProductEntity;
import com.sampleestore.FullStackEstore.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/amaterasu/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<ProductEntity> getAllProducts() {
        return productService.getAllProduct();
    }

    @GetMapping("/products/{productID}")
    public Optional<ProductEntity> getProductByID(@PathVariable Integer productID) {
        return productService.getProductByID(productID);
    }
}
