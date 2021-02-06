const API_BASE = "/wrdsEnglish/word";
const db = require("../db/index");
const database = require("../db/index");
const Word = require("../models/words");
const bodyParser = require("body-parser");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.get(API_BASE +'/showWords', (req, res) => {
        res.json(db.getWordsRandom());
    })

    app.post(API_BASE +'/addWord', (req, res) => {
        console.log('---> Body: ', req.body);
        const {description, meaning_es} = req.body;
        const newWord = {
            description,
            meaning_es
        };
        const word = Word.create(newWord);
        console.log('Word added: ', word.id);
        res.send('Created word');
    })
}


