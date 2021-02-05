const API_BASE = "/wrdsEnglish/word";
const db = require("../db/index");
const database = require("../db/index");

module.exports = (app) => {
    app.get(API_BASE +'/showWords', (req, res) => {
        res.json(db.getWordsRandom());
    })

    app.post(API_BASE +'/word/addWord', (req, res) => {
        res.send('Word added');
    })
}


