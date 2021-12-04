package com.caina.tienda.models;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class UserModel {
    @Id
    private String id;
    private String email;
    private String name;
    private Boolean enabled;
    private ArrayList<ProductModel> products;

    public UserModel() {
    }

    public UserModel(String id, String email, String name, Boolean enabled, ArrayList<ProductModel> products) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.enabled = enabled;
        this.products = products;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean isEnabled() {
        return this.enabled;
    }

    public Boolean getEnabled() {
        return this.enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public ArrayList<ProductModel> getProducts() {
        return this.products;
    }

    public void setProducts(ArrayList<ProductModel> products) {
        this.products = products;
    }

}
