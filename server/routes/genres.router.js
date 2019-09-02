const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//get genres

router.get('/:id', (req, res) => {
    const idForGenres = req.params.id
    const queryText = `SELECT "genres"."name" AS "genre" 
                    FROM "movies_genres" 
                    JOIN "genres" 
                    ON "movies_genres"."genres_id" = "genres".id 
                    WHERE "movies_genres".movies_id = $1;`
    pool.query(queryText, [idForGenres])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})


module.exports = router;