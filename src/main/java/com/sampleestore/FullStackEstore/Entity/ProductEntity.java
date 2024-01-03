package com.sampleestore.FullStackEstore.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="products")
public class ProductEntity {

    @Id
    @Column(name = "product_id", unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int productID;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "product_price")
    private float productPrice;
    @Column(name = "product_description")
    private String productDescription;
    @Column(name = "product_category")
    private String productCategory;
    @Column(name = "product_rating_count")
    private int productRatingCount;
    @Column(name = "product_rating_rate")
    private float productRatingRate;
    @Column(name = "product_subcategory")
    private String productSubcategory;
    @Column(name = "product_brand")
    private String productBrand;
    @Column(name = "product_image")
    private String productImage;

    public ProductEntity(int productID, String productName, float productPrice, String productDescription, String productCategory, int productRatingCount, float productRatingRate, String productSubcategory, String productBrand, String productImage) {
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productCategory = productCategory;
        this.productRatingCount = productRatingCount;
        this.productRatingRate = productRatingRate;
        this.productSubcategory = productSubcategory;
        this.productBrand = productBrand;
        this.productImage = productImage;
    }

    public ProductEntity() {
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public float getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(float productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public int getProductRatingCount() {
        return productRatingCount;
    }

    public void setProductRatingCount(int productRatingCount) {
        this.productRatingCount = productRatingCount;
    }

    public float getProductRatingRate() {
        return productRatingRate;
    }

    public void setProductRatingRate(float productRatingRate) {
        this.productRatingRate = productRatingRate;
    }

    public String getProductSubcategory() {
        return productSubcategory;
    }

    public void setProductSubcategory(String productSubcategory) {
        this.productSubcategory = productSubcategory;
    }

    public String getProductBrand() {
        return productBrand;
    }

    public void setProductBrand(String productBrand) {
        this.productBrand = productBrand;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    @Override
    public String toString() {
        return "ProductEntity{" +
                "productID=" + productID +
                ", productName='" + productName + '\'' +
                ", productPrice=" + productPrice +
                ", productDescription='" + productDescription + '\'' +
                ", productCategory='" + productCategory + '\'' +
                ", productRatingCount=" + productRatingCount +
                ", productRatingRate=" + productRatingRate +
                ", productSubcategory='" + productSubcategory + '\'' +
                ", productBrand='" + productBrand + '\'' +
                ", productImage='" + productImage + '\'' +
                '}';
    }
}

