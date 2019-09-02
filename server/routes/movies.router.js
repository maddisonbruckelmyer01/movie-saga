const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//get movies
router.get('/', (req,res) => {
    let queryText = `SELECT * FROM "movies";`;
    pool.query(queryText)
    .then((result)=>{
        console.log(result)
        res.send(result.rows)
    }).catch((error)=>{
        res.sendStatus(500)
    })
})

//get details
router.get('/details/:id',(req,res) => {
    console.log('in movies router get details', req.body);
    let idForDetails = req.params.id
    console.log('idfordetails', idForDetails)
    let queryText = `SELECT * FROM "movies" WHERE "id" = $1;`;
    console.log('queryText', queryText)
    pool.query(queryText, [idForDetails])
        .then(result => {
            res.send(result.rows[0])
        }).catch(error => {
            res.sendStatus(500);
        })
})

router.put('/update/:id', (req,res) => {
    console.log('server update req.body', req.body)
    let queryText = `UPDATE "movies" SET "description" =$1, "title" = $2 WHERE "id" = $3;`;
    pool.query(queryText, [req.body.description, req.body.title, req.body.movie_id])
        .then ((result) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            res.sendStatus(500)
        })
})

module.exports = router;