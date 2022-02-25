package com.bt.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bt.demo.model.ProductosModel;
import com.bt.demo.model.UsuariosModel;
import com.bt.demo.repositories.ProductosRepository;
import com.bt.demo.repositories.UsuariosRepository;


@Service 
public class BtService {

	private final UsuariosRepository usuariosRepository;
	private final ProductosRepository productosRepository;
	
	public BtService (@Autowired UsuariosRepository usuariosRepository, @Autowired ProductosRepository productosRepository) {
	this.usuariosRepository = usuariosRepository;
	this.productosRepository = productosRepository;
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
     
     //Metodos Productos 
     
   //obtener y mostrar elementos:
 	public ArrayList<ProductosModel> obtenerDatosProductos(){
 		return (ArrayList<ProductosModel>) productosRepository.findAll();
 	}

     //guarda datos en sql
 	public ProductosModel guardarDatosProductos(ProductosModel productosModel) {
 		
 	return productosRepository.save(productosModel);
 	}
 	
 	//borra
      public boolean eliminarDatoProductos(Integer id) {
 		
 		try {
 			productosRepository.deleteById(id);
 			return true;
 		}catch (Exception error) {
 			return false;
 		}
      }
	
}
