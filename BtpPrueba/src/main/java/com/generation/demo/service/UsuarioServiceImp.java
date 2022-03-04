package com.generation.demo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import static java.util.Collections.emptyList;
import com.generation.demo.model.User;
import com.generation.demo.repository.UsuarioRepository;

import java.util.Optional;


@Service
public class UsuarioServiceImp implements UsuarioService, UserDetailsService{
	
	private final UsuarioRepository usuarioRepository;
    
    public UsuarioServiceImp (@Autowired UsuarioRepository usuarioRepository) {
    	this.usuarioRepository = usuarioRepository;
    }
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = usuarioRepository.findByUsername(username);

        if(user == null) {
            throw new UsernameNotFoundException(username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), emptyList());
    
	}
	






	@Override
	public User obtenerUsuario(Long id) {
		Optional<User> user = usuarioRepository.findById(id);
        return user.orElse(null);
	}

	@Override
	public List<User> obtenerDatos() {
		return (List<User>) usuarioRepository.findAll();
	}

	@Override
	public User guardarDatos(User user) {
		return usuarioRepository.save(user);
	}

	@Override
	public void eliminarDato(Long id) {
		usuarioRepository.deleteById(id);
	}

}
