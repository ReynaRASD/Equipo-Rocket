package com.generation.demo.service;

import java.util.ArrayList;

import com.generation.demo.model.ProductoModel;


public interface ProductoService {
	
	ArrayList<ProductoModel> obtenerDatosProductos();

     //guarda datos en sql
 	ProductoModel guardarDatosProductos(ProductoModel productoModel);
 	
 	//borra
      public boolean eliminarDatoProductos(Integer id);
}
