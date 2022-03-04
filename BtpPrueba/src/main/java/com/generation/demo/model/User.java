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
@Table(name = "users")
public class User{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false )
	private Long id;
	
	@Column(nullable = false, length = 100)
    private String nombre;
	
	@Column(nullable = false, length = 100)
	private String username; //correo
	
	@Column(nullable = false, length = 100)
	private String password;
	
	@Column(nullable = false, length = 45)
	private String telefono;
	
	@OneToMany(mappedBy = "usuario")
    private List<CompraModel> comprasModel;
	
	
	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	
	

	public User() {
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getNombre() {
		return nombre;
	}



	public void setNombre(String nombre) {
		this.nombre = nombre;
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







	


}

