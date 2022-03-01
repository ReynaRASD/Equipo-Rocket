package com.generation.demo.service;

import java.util.ArrayList;

import com.generation.demo.model.CompraModel;

public interface CompraService {
	
	ArrayList<CompraModel> obtenerDatosCompras();

    //guarda datos en sql
   	CompraModel guardarDatosCompras(CompraModel compraModel);
   	
   	//borra
    boolean eliminarDatoCompras(Integer id);
   		
}
