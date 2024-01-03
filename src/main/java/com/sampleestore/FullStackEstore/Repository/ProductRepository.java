package com.sampleestore.FullStackEstore.Repository;

import com.sampleestore.FullStackEstore.Entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {

//    @Query("SELECT p FROM products p WHERE p.products.category = ?1")
//    List<ProductEntity> filterByProductCategory(String productCategory);

//    List<ProductEntity> filterBySubcategory(String productSubcategory);
//    List<ProductEntity> filterProductCategory(String productSubcategory);

}
