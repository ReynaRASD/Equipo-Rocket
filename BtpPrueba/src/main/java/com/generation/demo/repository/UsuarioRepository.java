package com.generation.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.demo.model.UsuarioModel;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Integer>{

}
