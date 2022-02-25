package com.bt.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bt.demo.model.ComprasModel;

@Repository
public interface ComprasRepository extends JpaRepository<ComprasModel, Integer> {

}



