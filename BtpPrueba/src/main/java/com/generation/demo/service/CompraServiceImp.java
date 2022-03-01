package com.generation.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.demo.model.CompraModel;
import com.generation.demo.repository.CompraRepository;

@Service
public class CompraServiceImp implements CompraService {
	
	private final CompraRepository compraRepository;
	
	public CompraServiceImp (@Autowired CompraRepository compraRepository) {
		this.compraRepository = compraRepository;
	}

	@Override
	public ArrayList<CompraModel> obtenerDatosCompras() {
		return (ArrayList<CompraModel>) compraRepository.findAll();
	}

	@Override
	public CompraModel guardarDatosCompras(CompraModel compraModel) {
		return compraRepository.save(compraModel);
	}

	@Override
	public boolean eliminarDatoCompras(Integer id) {
		try {
			compraRepository.deleteById(id);
			return true;
		}catch (Exception error) {
   			return false;
   		}
	}
	

}
