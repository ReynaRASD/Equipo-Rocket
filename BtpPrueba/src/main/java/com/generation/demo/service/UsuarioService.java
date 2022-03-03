package com.generation.demo.service;

import java.util.ArrayList;

import com.generation.demo.model.User;

public interface UsuarioService {
	
	User obtenerUsuario(Integer id);
	
	ArrayList<User> obtenerDatos();
	
	User guardarDatos(User user);
	
	boolean eliminarDato(Integer id);
	
}
