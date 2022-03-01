package com.generation.demo.model;

import java.util.List;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity  
@Table(name = "usuarios")
public class UsuarioModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false )
	private Integer id;
	
	@Column(nullable = false, length = 100)
    private String nombre;
	
	@Column(nullable = false, length = 100, unique = true)
	private String correo;
	
	@Column(nullable = false, length = 100)
	private String contrasenia;
	
	@Column(nullable = false, length = 45)
	private String telefono;
	
	
	@OneToMany(mappedBy = "usuario")
    private List<CompraModel> comprasModel;
	
	

	public UsuarioModel() {
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



	public String getCorreo() {
		return correo;
	}



	public void setCorreo(String correo) {
		this.correo = correo;
	}



	public String getContrasenia() {
		return contrasenia;
	}



	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}



	public String getTelefono() {
		return telefono;
	}



	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}



	public List<CompraModel> getComprasModel() {
		return comprasModel;
	}



	public void setComprasModel(List<CompraModel> comprasModel) {
		this.comprasModel = comprasModel;
	}



	@Override
	public String toString() {
		return "UsuarioModel [id=" + id + ", nombre=" + nombre + ", correo=" + correo + ", contrasenia=" + contrasenia
				+ ", telefono=" + telefono + ", comprasModel=" + comprasModel + "]";
	}


}
