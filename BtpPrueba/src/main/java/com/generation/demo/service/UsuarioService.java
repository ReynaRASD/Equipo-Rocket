package com.generation.demo.service;

import java.util.ArrayList;

import com.generation.demo.model.UsuarioModel;

public interface UsuarioService {
	
	UsuarioModel obtenerUsuario(Integer id);
	
	ArrayList<UsuarioModel> obtenerDatos();
	
	UsuarioModel guardarDatos(UsuarioModel usuarioModel);
	
	boolean eliminarDato(Integer id);
	
}
