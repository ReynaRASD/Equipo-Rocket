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
@Table(name = "user")
public class User{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false )
	private Integer id;
	
	@Column(nullable = false, length = 100)
    private String nombre;
	
	@Column(nullable = false, length = 100, unique = true)
	private String Username; //correo
	
	@Column(nullable = false, length = 100)
	private String Password;
	
	@Column(nullable = false, length = 45)
	private String telefono;
	
	@OneToMany(mappedBy = "usuario")
    private List<CompraModel> comprasModel;
	
	
	public String getUsername() {
		return Username;
	}



	public void setUsername(String username) {
		Username = username;
	}



	public String getPassword() {
		return Password;
	}



	public void setPassword(String password) {
		Password = password;
	}



	
	

	public User() {
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
		return "UsuarioModel [id=" + id + ", nombre=" + nombre + ", Username=" + Username + ", Password=" + Password
				+ ", telefono=" + telefono + ", comprasModel=" + comprasModel + "]";
	}



	


}
