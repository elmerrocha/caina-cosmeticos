package com.caina.tienda.api_tienda.services;

import java.util.ArrayList;
import java.util.Optional;

import com.caina.tienda.api_tienda.models.ProductModel;
import com.caina.tienda.api_tienda.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    //GET
    public ArrayList<ProductModel> getProducts() {
        return (ArrayList<ProductModel>) productRepository.findAll();
    }
    //POST
    public ProductModel saveProduct(ProductModel product) {
        return productRepository.save(product);
    }
    //DELETE
    public Boolean deleteProduct(String id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return true;
        }
        else return false;
    }
    //PUT
    public Boolean updateProduct(String id, ProductModel product) {
        if (productRepository.existsById(id)) {
            product.setId(id);
            productRepository.save(product);
            return true;
        }
        else return false;
    }
    //GET by ID
    public Optional<ProductModel> getProductById(String id) {
        return productRepository.findById(id);
    }
    //GET by Name
    public ArrayList<ProductModel> getProductByName(String name) {
        return productRepository.findByName(name);
    }
    //GET by Price
    public ArrayList<ProductModel> getProductByPrice(Integer price) {
        return productRepository.findByPrice(price);
    }
    //GET by Category
    public ArrayList<ProductModel> getProductByCategory(String category) {
        return productRepository.findByCategory(category);
    }
}
