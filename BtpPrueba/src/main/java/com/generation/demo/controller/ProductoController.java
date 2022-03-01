package com.generation.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.model.ProductoModel;
import com.generation.demo.service.ProductoService;


@RestController
public class ProductoController {
	
	private final ProductoService productoService;
	
	public ProductoController(@Autowired ProductoService productoService) {
		this.productoService = productoService;
	}

	@GetMapping("/productos")
	public ArrayList<ProductoModel> obtenerDatosProductos(){
		return productoService.obtenerDatosProductos();
	}
	
	@PostMapping("/productos")
	public ProductoModel guardarDatosProductos(@RequestBody ProductoModel productoModel) {
		return productoService.guardarDatosProductos(productoModel);
	}
	
	@DeleteMapping(path = "producto/{id}")                      
	public boolean eliminarDatoProductos(@PathVariable("id")Integer id) {
		return productoService.eliminarDatoProductos(id);
	} 
}
