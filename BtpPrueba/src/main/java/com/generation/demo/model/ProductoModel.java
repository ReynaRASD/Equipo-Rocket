package com.generation.demo.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "productos")
public class ProductoModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;

	@Column(nullable = false, length = 100)
	private String nombre;

	@Column(nullable = false)
	private Float precio;

	/*** RELACION MUCHOS A MUCHOS **/
	@JoinTable(
	        name = "detalles_compra",
	        joinColumns = @JoinColumn(name = "id_producto", nullable = false),
	        inverseJoinColumns = @JoinColumn(name="id_compra", nullable = false)
	    )
	
	@ManyToMany(cascade = CascadeType.ALL)
	private List<CompraModel> compras;

	
	
	// Constructor
	public ProductoModel() {
	
	}

	//Getter y setter

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



	public List<CompraModel> getCompras() {
		return compras;
	}



	public void setCompras(List<CompraModel> compras) {
		this.compras = compras;
	}

	@Override
	public String toString() {
		return "ProductoModel [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", precio=" + precio
				+ ", categoria=" + categoria + ", compras=" + compras + "]";
	}
	

}
