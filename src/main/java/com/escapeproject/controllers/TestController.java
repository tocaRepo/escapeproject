package com.escapeproject.controllers;

import com.escapeproject.models.AnswerResponse;
import com.escapeproject.models.Game;
import com.escapeproject.models.Level;
import com.escapeproject.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")

public class TestController {

    @Autowired
    GameService service;

    @PostMapping("/api/game/write")
    public String gameWrite(@RequestBody Game game) {
        System.out.println("Access /api/game/write");
        if (game == null || game.getId() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Game missing");
        }
        service.saveOrUpdateGame(game);
        return "{}";
    }

    @GetMapping("/api/game/get/all")
    public List<Game> getGames() {
        List<Game> games = service.getGames();
        service.CensorAnswers(games);
        return games;
    }

    @GetMapping("/api/game/get/{id}")
    public Game getGameById(@PathVariable String id) {
        Game game = service.getGame(id);
        service.CensorAnswers(game);
        return game;
    }

    @GetMapping("/api/game/get/{id}/answer")
    public AnswerResponse answerAttempt(@PathVariable String id, @RequestParam String answer, @RequestParam Integer levelId) {
        return service.validateResponse(id, answer, levelId);
    }

    @GetMapping("/")
    public String home() {
        System.out.println("Access /");
        return "Hi!";
    }


}
