const API_BASE = "/wrdsEnglish/word";
const db = require("../db/index");
const Word = require("../models/words");
const express = require('express');

module.exports = (app) => {
    app.use(express.json());
    app.get(API_BASE +'/showWords', (req, res) => {
        res.json(db.getWordsRandom());
    })

    app.post(API_BASE +'/addWord', (req, res, next) => {
        const {description, meaning_es} = req.body;
        const newWord = {
            description,
            meaning_es
        };
        Word.findAll({
            where: {
                description: description
            }
        }).then((resp) => {
            if(resp.length > 0) {
                res.send('This word already exists');
            } else {
                Word.create(newWord).then((result) => {
                    res.send('Create word ' + result.dataValues.description);
                })
                .catch(err => {
                    next(err);
                });
            }
        });
    })
}


