package com.bt.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bt.demo.model.ComprasModel;
import com.bt.demo.model.ProductosModel;
import com.bt.demo.model.UsuariosModel;
import com.bt.demo.services.BtService;

@RestController
public class BtController {
	
	private final BtService btService;
	
	public BtController(@Autowired BtService btService) {
		this.btService = btService;
	}
	
	//Usuarios 
	
	@GetMapping("/usuario")
	public ArrayList<UsuariosModel> obtenerDatos(){
		return btService.obtenerDatos();
	}
	
	@PostMapping("/registrar")
	public UsuariosModel guardarDatos(@RequestBody UsuariosModel usuariosModel) {
		return btService.guardarDatos(usuariosModel);
	}
	
	@DeleteMapping(path = "usuarios/{id}")                      
	public boolean eliminarDato(@PathVariable("id")Integer id) {
		return btService.eliminarDato(id);
	} 
	
	//Productos  
	
	@GetMapping("/productos")
	public ArrayList<ProductosModel> obtenerDatosProductos(){
		return btService.obtenerDatosProductos();
	}
	
	@PostMapping("/productos")
	public ProductosModel guardarDatosProductos(@RequestBody ProductosModel productosModel) {
		return btService.guardarDatosProductos(productosModel);
	}
	
	@DeleteMapping(path = "productos/{id}")                      
	public boolean eliminarDatoProductos(@PathVariable("id")Integer id) {
		return btService.eliminarDatoProductos(id);
	} 
	
	// Compras
	
	@GetMapping("/compras")
	public ArrayList<ComprasModel> obtenerDatosCompras(){
		return btService.obtenerDatosCompras();
	}
	
	@PostMapping("/compras")
	public ComprasModel guardarDatosCompras(@RequestBody ComprasModel comprasModel) {
		return btService.guardarDatosCompras(comprasModel);
	}
	
	@DeleteMapping(path = "compras/{id}")                      
	public boolean eliminarDatoCompras(@PathVariable("id")Integer id) {
		return btService.eliminarDatoCompras(id);
	}
	
}
