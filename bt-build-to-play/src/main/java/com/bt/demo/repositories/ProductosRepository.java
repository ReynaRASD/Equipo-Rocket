package com.bt.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bt.demo.model.ProductosModel;

@Repository 
public interface ProductosRepository extends JpaRepository<ProductosModel,Integer>{

}

