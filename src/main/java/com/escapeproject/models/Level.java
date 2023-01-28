
package com.escapeproject.models;

import com.fasterxml.jackson.annotation.*;

import javax.annotation.processing.Generated;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "id",
    "type",
    "title",
    "mainText",
    "img",
    "answer",
    "correctAnswer",
    "wrongAnswer",
    "countdown",
    "hints",
        "requiresAnswer"
})
@Generated("jsonschema2pojo")
public class Level {
    @JsonProperty("id")
    private Integer id;
    @JsonProperty("type")
    private String type;
    @JsonProperty("title")
    private String title;
    @JsonProperty("mainText")
    private String mainText;
    @JsonProperty("img")
    private String img;
    @JsonProperty("answer")
    private String answer;
    @JsonProperty("correctAnswer")
    private List<String> correctAnswer = null;
    @JsonProperty("wrongAnswer")
    private List<String> wrongAnswer = null;
    @JsonProperty("countdown")
    private Integer countdown;
    @JsonProperty("hints")
    private List<String> hints = null;
    @JsonProperty("requiresAnswer")
    private boolean requiresAnswer;


    @JsonProperty("id")
    public Integer getId() {
        return id;
    }

    @JsonProperty("id")
    public void setId(Integer id) {
        this.id = id;
    }

    @JsonProperty("type")
    public String getType() {
        return type;
    }

    @JsonProperty("type")
    public void setType(String type) {
        this.type = type;
    }

    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @JsonProperty("title")
    public void setTitle(String title) {
        this.title = title;
    }

    @JsonProperty("mainText")
    public String getMainText() {
        return mainText;
    }

    @JsonProperty("mainText")
    public void setMainText(String mainText) {
        this.mainText = mainText;
    }

    @JsonProperty("img")
    public String getImg() {
        return img;
    }

    @JsonProperty("img")
    public void setImg(String img) {
        this.img = img;
    }

    @JsonProperty("answer")
    public String getAnswer() {
        return answer;
    }

    @JsonProperty("answer")
    public void setAnswer(String answer) {
        this.answer = answer;
    }

    @JsonProperty("correctAnswer")
    public List<String> getCorrectAnswer() {
        return correctAnswer;
    }

    @JsonProperty("correctAnswer")
    public void setCorrectAnswer(List<String> correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    @JsonProperty("wrongAnswer")
    public List<String> getWrongAnswer() {
        return wrongAnswer;
    }

    @JsonProperty("wrongAnswer")
    public void setWrongAnswer(List<String> wrongAnswer) {
        this.wrongAnswer = wrongAnswer;
    }

    @JsonProperty("countdown")
    public Integer getCountdown() {
        return countdown;
    }

    @JsonProperty("countdown")
    public void setCountdown(Integer countdown) {
        this.countdown = countdown;
    }

    @JsonProperty("hints")
    public List<String> getHints() {
        return hints;
    }

    @JsonProperty("hints")
    public void setHints(List<String> hints) {
        this.hints = hints;
    }
    @JsonProperty("requiresAnswer")
    public boolean getRequiresAnswer() {
        return requiresAnswer;
    }

    @JsonProperty("requiresAnswer")
    public void setRequiresAnswer(boolean requiresAnswer) {
        this.requiresAnswer = requiresAnswer;
    }

}
