package com.generation.demo.service;
import static java.util.Collections.emptyList;

import java.util.List;

import org.springframework.stereotype.Service;

import com.generation.demo.model.User;


public interface UsuarioService {
	
	User obtenerUsuario(Long id);
	
	List<User>obtenerDatos();
	
	User guardarDatos(User user);
	
	void eliminarDato(Long id);
	
}
