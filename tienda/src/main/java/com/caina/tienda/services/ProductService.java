package com.caina.tienda.services;

import java.util.ArrayList;
import java.util.Optional;

import com.caina.tienda.models.ProductModel;
import com.caina.tienda.repositories.ProductRepository;

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
    public boolean deleteProduct(Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return true;
        }
        else {
            return false;
        }
    }

    //GET by ID
    public Optional<ProductModel> getProductById(Long id) {
        return productRepository.findById(id);
    }
}
