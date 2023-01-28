package com.escapeproject.repositories;

import com.escapeproject.models.Game;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface GameRepository extends MongoRepository<Game, String> {

    @Query("{'status' : ?0}")
    public List<Game> findByStatus(String status);
}