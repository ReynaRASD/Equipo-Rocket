package com.generation.demo.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.demo.model.User;
import com.generation.demo.repository.UsuarioRepository;

@Service
public class UsuarioServiceImp implements UsuarioService {
	
	private final UsuarioRepository usuarioRepository;
    
    public UsuarioServiceImp (@Autowired UsuarioRepository usuarioRepository) {
    	this.usuarioRepository = usuarioRepository;
    }

	@Override
	public User obtenerUsuario(Integer id) {
		Optional<User> user = usuarioRepository.findById(id);
        return user.orElse(null);
	}

	@Override
	public ArrayList<User> obtenerDatos() {
		return (ArrayList<User>) usuarioRepository.findAll();
	}

	@Override
	public User guardarDatos(User user) {
		return usuarioRepository.save(user);
	}

	@Override
	public boolean eliminarDato(Integer id) {
		try {
			usuarioRepository.deleteById(id);
			return true;
		}catch (Exception error) {
			return false;
		}
	}
    
    

}
