package com.bt.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bt.demo.model.UsuariosModel;

@Repository 
public interface UsuariosRepository extends JpaRepository<UsuariosModel,Integer>{

}
