package com.bt.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productos")

public class ProductosModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;

	@Column(name = "nombre", nullable = false, length = 100)
	private String nombre;

	@Column(name = "descripcion", nullable = false)
	private String descripcion;

	@Column(name = "precio", nullable = false)
	private Float precio;

	@Column(name = "categoria", nullable = false, length = 45)
	private String categoria; 
	
	public ProductosModel() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Float getPrecio() {
		return precio;
	}

	public void setPrecio(Float precio) {
		this.precio = precio;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	} 
	
	@Override
	public String toString() {
		return "CategoriaModel [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", precio =" + precio + ", categoria =" + categoria + "]";
	}
	
	

}
