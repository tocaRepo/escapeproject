package com.escapeproject.services;

import com.escapeproject.models.AnswerResponse;
import com.escapeproject.models.Game;
import com.escapeproject.models.Level;
import com.escapeproject.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class GameService {

    @Autowired
    GameRepository repository;

    Random rand = new Random();

    public void saveOrUpdateGame(Game game) {
        repository.save(game);
    }

    public List<Game> getGames() {
        String status = "draft";
        return repository.findByStatus(status);
    }


    public Game getGame(String id) {
        return repository.findById(id).get();
    }

    public void CensorAnswers(List<Game> games) {
        for (Game item :
                games) {
            for (Level level :
                    item.getLevels()) {
                level.setAnswer(null);
            }
        }
    }

    public void CensorAnswers(Game game) {

        for (Level level :
                game.getLevels()) {
            level.setAnswer(null);
        }

    }

    public AnswerResponse validateResponse(String gameid, String answer, Integer levelId) {
        AnswerResponse response = new AnswerResponse();
        Game game = getGame(gameid);
        Level level = game.getLevels().get(levelId);

        if (level.getAnswer().equalsIgnoreCase(answer)) {
            response.isCorrect = true;
            response.message = level.getCorrectAnswer().get(rand.nextInt(level.getCorrectAnswer().size()));
        } else {
            response.isCorrect = false;
            response.message = level.getWrongAnswer().get(rand.nextInt(level.getCorrectAnswer().size()));
        }

        return response;
    }
}
