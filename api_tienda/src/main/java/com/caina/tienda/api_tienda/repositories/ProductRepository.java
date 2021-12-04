package com.caina.tienda.api_tienda.repositories;

import java.util.ArrayList;

import com.caina.tienda.api_tienda.models.ProductModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<ProductModel, String> {
    ArrayList<ProductModel> findByName(String name);
    ArrayList<ProductModel> findByPrice(Integer price);
    ArrayList<ProductModel> findByCategory(String category);
}
