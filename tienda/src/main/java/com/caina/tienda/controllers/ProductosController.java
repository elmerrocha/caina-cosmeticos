package com.caina.tienda.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.caina.tienda.models.ProductosModel;
import com.caina.tienda.services.ProductosService;

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
@RequestMapping("/productos")
public class ProductosController {
    @Autowired
    ProductosService productosService;

    //Método GET
    @GetMapping
    public ArrayList<ProductosModel> obtenerProductos() {
        return productosService.obtenerProductos();
    }

    //Método POST
    @PostMapping
    public ProductosModel guardarProducto(@RequestBody ProductosModel producto) {
        return productosService.guardarProducto(producto);
    }

    //Método DELETE
    @DeleteMapping(path = "/{id}")
    public String eliminarProductoPorId(@PathVariable("id") Long id) {
        boolean resultado = this.productosService.eliminarProducto(id);
        if (resultado) {
            return "Se eliminó el producto con id: "+id;
        }
        else {
            return "No existe el producto con id: "+id;
        }
    }

    //Método GET por ID
    @GetMapping(path = "/{id}")
    public Optional<ProductosModel> obtenerProductoPorId(@PathVariable("id") Long id) {
        return this.productosService.obtenerProductoPorId(id);
    }
}
