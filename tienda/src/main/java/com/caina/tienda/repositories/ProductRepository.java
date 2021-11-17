package com.caina.tienda.repositories;

import com.caina.tienda.models.ProductModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<ProductModel, Long> {

}
