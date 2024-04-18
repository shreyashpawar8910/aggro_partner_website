package com.aggro.repository;

import com.aggro.model.AggroUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<AggroUser, Integer> {

    AggroUser findByUsernameAndPassword(String username, String password);

}
