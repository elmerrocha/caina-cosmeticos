package com.caina.tienda.repositories;

import com.caina.tienda.models.ProductosModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductosRepository extends MongoRepository<ProductosModel, Long> {

}
