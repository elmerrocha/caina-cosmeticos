package com.caina.tienda.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.caina.tienda.models.ProductModel;
import com.caina.tienda.services.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RequestMapping("/products")
public class ProductController {
    @Autowired
    ProductService productService;

    //GET
    @GetMapping
    public ArrayList<ProductModel> getProducts() {
        return productService.getProducts();
    }

    //POST
    @PostMapping
    public ProductModel saveProduct(@RequestBody ProductModel product) {
        return productService.saveProduct(product);
    }

    //DELETE
    @DeleteMapping(path = "/{id}")
    public String deleteProductById(@PathVariable("id") Long id) {
        if (this.productService.deleteProduct(id)) return "Product with id "+ id +" was removed";
        else return "The product with id "+ id +" don't exist";
    }

    //GET by ID
    @GetMapping(path = "/{id}")
    public Optional<ProductModel> getProductById(@PathVariable("id") Long id) {
        return this.productService.getProductById(id);
    }
}
