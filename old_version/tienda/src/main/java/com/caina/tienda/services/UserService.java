package com.caina.tienda.services;

import java.util.ArrayList;
import java.util.Optional;

import com.caina.tienda.models.UserModel;
import com.caina.tienda.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    //GET
    public ArrayList<UserModel> getUsers() {
        return (ArrayList<UserModel>) userRepository.findAll();
    }

    //POST
    public UserModel saveUser(UserModel user) {
        return userRepository.save(user);
    }

    //DELETE
    public boolean deleteUser(String id) {
        if(userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        else return false;
    }

    //GET by ID
    public Optional<UserModel> getUserById(String id) {
        return userRepository.findById(id);
    }

    //GET by name
    public ArrayList<UserModel> getUserByName(String name) {
        return userRepository.findByName(name);
    }

    //PUT
    public Boolean updateUser(String id, UserModel user) {
        if (userRepository.existsById(id)) {
            user.setId(id);
            userRepository.save(user);
            return true;
        }
        else return false;
    }
}
