package com.caina.tienda.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class ProductModel {
    @Id
    private Long id;
    private String name;
    private String description;
    private Integer cost;
    private Integer quantity;
    private Boolean stock;

    public ProductModel() {
    }
    public ProductModel(Long id, String name, String description, Integer cost, Integer quantity, Boolean stock) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.quantity = quantity;
        this.stock = stock;
    }
    public Long getId() {
        return this.id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return this.description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Integer getCost() {
        return this.cost;
    }
    public void setCost(Integer cost) {
        this.cost = cost;
    }
    public Integer getQuantity() {
        return this.quantity;
    }
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
    public Boolean isStock() {
        return this.stock;
    }
    public Boolean getStock() {
        return this.stock;
    }
    public void setStock(Boolean stock) {
        this.stock = stock;
    }
}
