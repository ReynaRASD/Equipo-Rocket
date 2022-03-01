package com.generation.demo.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.generation.demo.model.UsuarioModel;
import com.generation.demo.repository.UsuarioRepository;

@Service
public class UsuarioServiceImp implements UsuarioService {
	
	private final UsuarioRepository usuarioRepository;
    
    public UsuarioServiceImp (@Autowired UsuarioRepository usuarioRepository) {
    	this.usuarioRepository = usuarioRepository;
    }

	@Override
	public UsuarioModel obtenerUsuario(Integer id) {
		Optional<UsuarioModel> user = usuarioRepository.findById(id);
        return user.orElse(null);
	}

	@Override
	public ArrayList<UsuarioModel> obtenerDatos() {
		return (ArrayList<UsuarioModel>) usuarioRepository.findAll();
	}

	@Override
	public UsuarioModel guardarDatos(UsuarioModel usuarioModel) {
		return usuarioRepository.save(usuarioModel);
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
