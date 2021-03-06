package com.generation.demo.controller;



import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.generation.demo.model.User;
import com.generation.demo.service.UsuarioService;

@RestController
@RequestMapping("/api/user")
public class UsuarioController {
	
	private final UsuarioService usuarioService;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public UsuarioController(@Autowired UsuarioService usuarioService,@Autowired BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.usuarioService = usuarioService;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}

	@PostMapping
	public User saveUser(@RequestBody User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return usuarioService.guardarDatos(user);
	}
	
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return usuarioService.obtenerUsuario(id);
    }


    @GetMapping("/all")
    public ArrayList<User> getUsers() {
        return (ArrayList<User>) usuarioService.obtenerDatos();
    }
	/*
	@DeleteMapping(path = "user/{id}")                      
	public boolean eliminarDato(@PathVariable("id")Integer id) {
		return usuarioService.eliminarDato(id);
	} */
}
