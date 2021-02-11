const API_BASE = "/wrdsEnglish/word";
const Word = require("../models/words");
const express = require('express');
const cors = require('cors')
const Sequelize = require("sequelize");

module.exports = (app) => {
    app.use(express.json());
    app.use(cors()); 
    app.get(API_BASE +'/showWords/:cant', (req, res) => {
        const cantWords = parseInt(req.params.cant);
        Word.findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']},
            order: Sequelize.literal('rand()'),
            limit: cantWords
        }).then((words) => {
            res.json(words);
        });
        
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
                    res.status(201).send({resp: 'OK'});
                })
                .catch(err => {
                    next(new Error(err));
                });
            }
        });
    });

    app.use((err, req, res, next) => {
        console.log('ENTRO AL MIDDLEWARE DE ERROR ---');
        if(err.message.match(/not found/)) {
            return res.status(404).send({error: err.message});
        }

        res.status(500).send({error: err.message});

    });
}


