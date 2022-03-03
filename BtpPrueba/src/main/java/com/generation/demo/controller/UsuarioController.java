package com.generation.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.generation.demo.model.User;
import com.generation.demo.service.UsuarioService;

@RestController
public class UsuarioController {
	
	private final UsuarioService usuarioService;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	public UsuarioController(@Autowired UsuarioService usuarioService,@Autowired BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.usuarioService = usuarioService;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}
	
	@GetMapping("/usuario")
	public ArrayList<User> obtenerDatos(){
		return usuarioService.obtenerDatos();
	}
	
	@PostMapping("/api/user")
	public User guardarDatos(@RequestBody User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		return usuarioService.guardarDatos(user);
	}
	
	@DeleteMapping(path = "usuario/{id}")                      
	public boolean eliminarDato(@PathVariable("id")Integer id) {
		return usuarioService.eliminarDato(id);
	} 
}
