package com.caina.tienda.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.caina.tienda.models.UserModel;
import com.caina.tienda.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService userService;

    //GET
    @GetMapping
    public ArrayList<UserModel> getUsers() {
        return userService.getUsers();
    }

    //POST
    @PostMapping
    public UserModel saveUser(@RequestBody UserModel user) {
        return userService.saveUser(user);
    }

    //DELETE
    @DeleteMapping(path = "/{id}")
    public String deleteUserById(@PathVariable("id") String id) {
        if (this.userService.deleteUser(id)) return "User with id "+id+" was removed";
        else return "The user with id "+id+" don't exist";
    }

    //PUT
    @PutMapping(path = "/{id}")
    public Optional<UserModel> getUserById(@PathVariable("id") String id) {
        return this.userService.getUserById(id);
    }

    //GET by name
    @GetMapping(path = "/name/{name}")
    public ArrayList<UserModel> getUserByName(@PathVariable("name") String name) {
        return this.userService.getUserByName(name);
    }

}
