const express = require('express');
const router = express.Router();
const connection  = require('../config');

// CHARACTER 

// ajout d"une donnée
router.post('/characters', (req, res) => {

  const data = req.body;

  connection.query('INSERT INTO visioncharacter SET ?', data, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// récupération de liste
router.get('/characters', (req, res) => {
  connection.query('SELECT * FROM visioncharacter', (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})

// récupération d"une donnée
router.get('/characters/:id', (req, res) => {
  const idParams = req.params.id;
  connection.query('SELECT * FROM visioncharacter WHERE id = ?', idParams, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.json(results)
    }
  })
})

// modification d"une donnée
router.put('/characters/:id', (req, res) => {

  const idParams = req.params.id;
  const data = req.body;

  connection.query('UPDATE visioncharacter SET ? WHERE id = ?', [data, idParams], (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// suppression d"une donnée
router.delete('/characters/:id', (req, res) => {

  const idParams = req.params.id;

  connection.query('DELETE FROM visioncharacter WHERE id = ?', idParams, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// recupération liste de donnée par rapport à une jointure
router.get('/characters/:id', (req, res) => {
  const id = req.params.id;

  connection.query('SELECT * FROM visioncharacter WHERE id_character = ? ', id, (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})

// PLACE


// ajout d"une donnée
router.post('/places', (req, res) => {

  const data = req.body;

  connection.query('INSERT INTO visionplace SET ?', data, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// récupération de liste
router.get('/places', (req, res) => {
  connection.query('SELECT * FROM visionplace', (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})

// récupération d"une donnée
router.get('/places/:id', (req, res) => {
  const idParams = req.params.id;
  connection.query('SELECT * FROM visionplace WHERE id = ?', idParams, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.json(results)
    }
  })
})

// modification d"une donnée
router.put('/places/:id', (req, res) => {

  const idParams = req.params.id;
  const data = req.body;

  connection.query('UPDATE visionplace SET ? WHERE id = ?', [data, idParams], (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// suppression d"une donnée
router.delete('/places/:id', (req, res) => {

  const idParams = req.params.id;

  connection.query('DELETE FROM visionplace WHERE id = ?', idParams, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// recupération liste de donnée par rapport à une jointure
router.get('/places/:id', (req, res) => {
  const id = req.params.id;

  connection.query('SELECT * FROM visioncharacter WHERE id_place = ? ', id, (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})


// WEAPON


// ajout d"une donnée
router.post('/weapons', (req, res) => {

  const data = req.body;

  connection.query('INSERT INTO visionweapon SET ?', data, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// récupération de liste
router.get('/weapons', (req, res) => {
  connection.query('SELECT * FROM visionweapon', (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})

// récupération d"une donnée
router.get('/weapons/:id', (req, res) => {
  const idParams = req.params.id;
  connection.query('SELECT * FROM visionweapon WHERE id = ?', idParams, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.json(results)
    }
  })
})

// modification d"une donnée
router.put('/weapons/:id', (req, res) => {

  const idParams = req.params.id;
  const data = req.body;

  connection.query('UPDATE visionweapon SET ? WHERE id = ?', [data, idParams], (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// suppression d"une donnée
router.delete('/weapons/:id', (req, res) => {

  const idParams = req.params.id;

  connection.query('DELETE FROM visionweapon WHERE id = ?', idParams, (err, results) => {
    if(err) {
      res.sendStatus(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// recupération liste de donnée par rapport à une jointure
router.get('/weapons/:id', (req, res) => {
  const id = req.params.id;

  connection.query('SELECT * FROM visionweapon WHERE id_weapon = ? ', id, (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json(results)
    }
  })
})



module.exports = router; 