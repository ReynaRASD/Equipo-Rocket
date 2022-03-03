package com.generation.demo.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "compras")
public class CompraModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	
	@Column(nullable = false)
	private Float pago_total;
	
	@Column(nullable = false, length = 255)
	private String direccion;
	
	@Column(nullable = false)
	private Integer total_productos;
	
	@Column(nullable = false)
	private Date fecha;
	
	@ManyToOne
	@JsonProperty(access = Access.WRITE_ONLY) 
	
	private User usuario;
	
	/*** RELACION MUCHOS A MUCHOS **/
	
	@ManyToMany(mappedBy = "compras")
    private List<ProductoModel> productos;
	
	
	// Constructor
	public CompraModel() {
			
	}

	//Getter y setter
	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Float getPago_total() {
		return pago_total;
	}


	public void setPago_total(Float pago_total) {
		this.pago_total = pago_total;
	}


	public String getDireccion() {
		return direccion;
	}


	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}


	public Integer getTotal_productos() {
		return total_productos;
	}


	public void setTotal_productos(Integer total_productos) {
		this.total_productos = total_productos;
	}


	public Date getFecha() {
		return fecha;
	}


	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}


	public User getUsuario() {
		return usuario;
	}


	public void setUsuario(User usuario) {
		this.usuario = usuario;
	}


	public List<ProductoModel> getProductos() {
		return productos;
	}


	public void setProductos(List<ProductoModel> productos) {
		this.productos = productos;
	}

	@Override
	public String toString() {
		return "CompraModel [id=" + id + ", pago_total=" + pago_total + ", direccion=" + direccion
				+ ", total_productos=" + total_productos + ", fecha=" + fecha + ", usuario=" + usuario + ", productos="
				+ productos + "]";
	}

	

	
}
