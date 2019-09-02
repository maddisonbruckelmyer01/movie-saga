const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//get genres

router.get('/:id', (req,res) => {
    let queryText = `SELECT * FROM "movies"
        JOIN "movies_genres" ON "movies".id="movies_genres".movies_id
        JOIN "genres" ON "genres".id="movies_genres".genres_id;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows);
        }).catch((error)=>{
            console.log(error);
            res.sendStatus(500);
        })
})


module.exports = router;