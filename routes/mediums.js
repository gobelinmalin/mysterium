const express = require('express');
const router = express.Router();
const connection = require('../config');

// ajout d"une donnée
router.post('/', (req, res) => {
  const data = req.body;

  connection.query('INSERT INTO medium SET ?', data, (err, results) => {
    if (err) {
      res.sendStatus(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// récupération de liste
router.get('/', (req, res) => {
  connection.query('SELECT * FROM medium', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// récupération d"une donnée
router.get('/:id', (req, res) => {
  const idParams = req.params.id;
  connection.query('SELECT * FROM medium WHERE id = ?', idParams, (err, results) => {
    if (err) {
      res.sendStatus(err);
    } else {
      res.json(results);
    }
  });
});

// modification d"une donnée
router.put('/:id', (req, res) => {
  const idParams = req.params.id;
  const data = req.body;

  connection.query('UPDATE medium SET ? WHERE id = ?', [data, idParams], (err, results) => {
    if (err) {
      res.sendStatus(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// suppression d"une donnée
router.delete('/:id', (req, res) => {
  const idParams = req.params.id;

  connection.query('DELETE FROM medium WHERE id = ?', idParams, (err, results) => {
    if (err) {
      res.sendStatus(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
