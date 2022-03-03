package com.generation.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.demo.model.User;


public interface UsuarioRepository extends JpaRepository<User, Integer>{

}
