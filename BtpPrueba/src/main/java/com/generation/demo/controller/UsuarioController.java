package com.generation.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.model.User;
import com.generation.demo.service.UsuarioService;

@RestController
public class UsuarioController {
	
	private final UsuarioService usuarioService;
	
	public UsuarioController(@Autowired UsuarioService usuarioService) {
		this.usuarioService = usuarioService;
	}
	
	@GetMapping("/usuario")
	public ArrayList<User> obtenerDatos(){
		return usuarioService.obtenerDatos();
	}
	
	@PostMapping("/api/user")
	public User guardarDatos(@RequestBody User usuarioModel) {
		return usuarioService.guardarDatos(usuarioModel);
	}
	
	@DeleteMapping(path = "usuario/{id}")                      
	public boolean eliminarDato(@PathVariable("id")Integer id) {
		return usuarioService.eliminarDato(id);
	} 
}
