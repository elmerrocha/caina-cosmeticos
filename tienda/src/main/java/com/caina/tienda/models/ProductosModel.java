package com.caina.tienda.models;

import org.springframework.data.annotation.Id;

public class ProductosModel {
    @Id
    private Long id;

    private String nombre;
    private String descripcion;
    private Integer costo;

    public ProductosModel() {
    }


    public ProductosModel(Long id, String nombre, String descripcion, Integer costo) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.costo = costo;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getCosto() {
        return this.costo;
    }

    public void setCosto(Integer costo) {
        this.costo = costo;
    }

}
