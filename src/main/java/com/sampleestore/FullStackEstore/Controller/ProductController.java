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
    public Optional<ProductEntity> getProductByID(@PathVariable(value = "productID") int productID) {
        return productService.getProductByID(productID);
    }

    @GetMapping("/products/category/{productCategory}")
    public List<ProductEntity> getProductByCategory(@PathVariable(value = "productCategory") String productCategory) {
        return productService.filterProductsByCategory(productCategory);
    }

    @GetMapping("/products/category/{productCategory}/{productSubCategory}")
    public List<ProductEntity> getProductBySubCategory(@PathVariable(value = "productCategory") String productCategory, @PathVariable(value = "productSubCategory") String productSubCategory) {
        return productService.filterProductsBySubcategory(productCategory ,productSubCategory);
    }
}
