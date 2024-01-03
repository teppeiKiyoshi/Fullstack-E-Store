package com.sampleestore.FullStackEstore.DTO;

public class ProductDTO {

    private int productID;
    private String productName;
    private float productPrice;
    private String productDescription;
    private String productCategory;
    private int productRatingCount;
    private float productRatingRate;
    private String productSubcategory;
    private String productBrand;
    private String productImage;

    public ProductDTO(int productID, String productName, float productPrice, String productDescription, String productCategory, int productRatingCount, float productRatingRate, String productSubcategory, String productBrand, String productImage) {
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

    public ProductDTO() {
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
        return "ProductDTO{" +
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