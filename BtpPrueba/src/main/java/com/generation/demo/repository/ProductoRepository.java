package com.generation.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.demo.model.ProductoModel;

public interface ProductoRepository extends JpaRepository<ProductoModel, Integer>{

}
