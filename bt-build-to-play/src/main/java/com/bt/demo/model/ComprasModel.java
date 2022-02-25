package com.bt.demo.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "compras")

public class ComprasModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;

	@Column(name = "usuario_id", nullable = false)
	private Integer usuario_id;
	
	@Column(name = "pago_total", nullable = false)
	private Float pago_total;
	
	@Column(name = "direccion", nullable = false, length = 255)
	private String direccion;
	
	@Column(name = "total_productos", nullable = false)
	private Integer total_productos;
	
	@Column(name = "fecha", nullable = false)
	private Date fecha;

	public ComprasModel() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUsuario_id() {
		return usuario_id;
	}

	public void setUsuario_id(Integer usuario_id) {
		this.usuario_id = usuario_id;
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

	@Override
	public String toString() {
		return "ComprasModel [id=" + id + ", usuario_id=" + usuario_id + ", pago_total=" + pago_total + ", direccion="
				+ direccion + ", total_productos=" + total_productos + ", fecha=" + fecha + "]";
	}
	
}
