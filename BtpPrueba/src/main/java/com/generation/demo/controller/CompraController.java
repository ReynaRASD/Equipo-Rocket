package com.generation.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.model.CompraModel;
import com.generation.demo.service.CompraService;

@RestController
public class CompraController {
	private final CompraService compraService;
	
	public CompraController(@Autowired CompraService compraService) {
		this.compraService = compraService;
	}
	
	@GetMapping("/compras")
	public ArrayList<CompraModel> obtenerDatosCompras(){
		return compraService.obtenerDatosCompras();
	}
	
	@PostMapping("/compras")
	public CompraModel guardarDatosCompras(@RequestBody CompraModel compraModel) {
		return compraService.guardarDatosCompras(compraModel);
	}
	
	@DeleteMapping(path = "compras/{id}")                      
	public boolean eliminarDatoCompras(@PathVariable("id")Integer id) {
		return compraService.eliminarDatoCompras(id);
	}
}
