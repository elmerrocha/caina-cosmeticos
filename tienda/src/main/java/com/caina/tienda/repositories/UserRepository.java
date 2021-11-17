package com.caina.tienda.repositories;

import java.util.ArrayList;

import com.caina.tienda.models.UserModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {
    ArrayList<UserModel> findByName(String name);
}
