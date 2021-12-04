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
    public boolean deleteProduct(String id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return true;
        }
        else {
            return false;
        }
    }

    //GET by ID
    public Optional<ProductModel> getProductById(String id) {
        return productRepository.findById(id);
    }

    //GET by name
    public ArrayList<ProductModel> getProductByName(String name) {
        return productRepository.findByName(name);
    }

    //GET by cost
    public ArrayList<ProductModel> getProductByCost(Integer cost) {
        return productRepository.findByCost(cost);
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
}
