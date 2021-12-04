package com.caina.tienda.api_tienda.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.caina.tienda.api_tienda.models.ProductModel;
import com.caina.tienda.api_tienda.services.ProductService;

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
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
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
    public String deleteProductById(@PathVariable("id") String id) {
        if (this.productService.deleteProduct(id)) return "Product with id "+ id +" was removed";
        else return "The product with id "+ id +" does not exist";
    }
    //PUT
    @PutMapping(path = "/{id}")
    public String updateProductById(@PathVariable("id") String id, @RequestBody ProductModel product) {
        if (this.productService.updateProduct(id, product)) return "Product with id "+ id +" was updated";
        else return "The product with id "+ id +" does not exist";
    }
    //GET by ID
    @GetMapping(path = "/{id}")
    public Optional<ProductModel> getProductById(@PathVariable("id") String id) {
        return this.productService.getProductById(id);
    }
    //GET by name
    @GetMapping(path = "/name/{name}")
    public ArrayList<ProductModel> getProductByName(@PathVariable("name") String name) {
        return this.productService.getProductByName(name);
    }
    //GET by Price
    @GetMapping(path = "/price/{price}")
    public ArrayList<ProductModel> getProductByPrice(@PathVariable("price") Integer price) {
        return this.productService.getProductByPrice(price);
    }
    //GET by Category
    @GetMapping(path = "/category/{category}")
    public ArrayList<ProductModel> getProductByCategory(@PathVariable("category") String category) {
        return this.productService.getProductByCategory(category);
    }
}
