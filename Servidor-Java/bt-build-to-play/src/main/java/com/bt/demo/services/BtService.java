package com.bt.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bt.demo.model.UsuariosModel;
import com.bt.demo.repositories.UsuariosRepository;


@Service 
public class BtService {

	private final UsuariosRepository usuariosRepository;
	
	
	public BtService (@Autowired UsuariosRepository usuariosRepository) {
	this.usuariosRepository = usuariosRepository;
	}
	
	//obtener y mostrar elementos:
	public ArrayList<UsuariosModel> obtenerDatos(){
		return (ArrayList<UsuariosModel>) usuariosRepository.findAll();
	}

    //guarda datos en sql
	public UsuariosModel guardarDatos(UsuariosModel usuariosModel) {
		
	return usuariosRepository.save(usuariosModel);
	}
	
	//borra
     public boolean eliminarDato(Integer id) {
		
		try {
			usuariosRepository.deleteById(id);
			return true;
		}catch (Exception error) {
			return false;
		}
     }
	
}
