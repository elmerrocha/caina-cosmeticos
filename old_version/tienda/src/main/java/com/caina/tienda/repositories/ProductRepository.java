package com.caina.tienda.repositories;

import java.util.ArrayList;

import com.caina.tienda.models.ProductModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<ProductModel, String> {

    ArrayList<ProductModel> findByName(String name);

    ArrayList<ProductModel> findByCost(Integer cost);

}
