package com.generation.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.generation.demo.model.ProductoModel;
import com.generation.demo.repository.ProductoRepository;

@Service
public class ProductoServiceImp implements ProductoService {
	
	private final ProductoRepository productoRepository;
	
	public ProductoServiceImp (@Autowired ProductoRepository productoRepository) {
		this.productoRepository = productoRepository;
	}
	
	@Override
	public ArrayList<ProductoModel> obtenerDatosProductos() {
		return (ArrayList<ProductoModel>) productoRepository.findAll();
	}

	@Override
	public ProductoModel guardarDatosProductos(ProductoModel productoModel) {
		return productoRepository.save(productoModel);
	}

	@Override
	public boolean eliminarDatoProductos(Integer id) {
		try {
 			productoRepository.deleteById(id);
 			return true;
 		}catch (Exception error) {
 			return false;
 		}
	}

}
