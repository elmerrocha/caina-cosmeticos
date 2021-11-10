package com.caina.tienda.services;

import java.util.ArrayList;
import java.util.Optional;

import com.caina.tienda.models.ProductosModel;
import com.caina.tienda.repositories.ProductosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductosService {
    @Autowired
    ProductosRepository productoRepository;

    //Método GET
    public ArrayList<ProductosModel> obtenerProductos() {
        return (ArrayList<ProductosModel>) productoRepository.findAll();
    }

    //Método POST
    public ProductosModel guardarProducto(ProductosModel producto) {
        return productoRepository.save(producto);
    }

    //Método DELETE
    public boolean eliminarProducto(Long id) {
        if (productoRepository.existsById(id)) {
            productoRepository.deleteById(id);
            return true;
        }
        else {
            return false;
        }
    }

    //Método GET por ID
    public Optional<ProductosModel> obtenerProductoPorId(Long id) {
        return productoRepository.findById(id);
    }
}
