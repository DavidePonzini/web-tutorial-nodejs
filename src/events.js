const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.get('/products', function (req, res, next) {
    db.query(
      'SELECT * FROM products ORDER BY name',
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/profile/:user', function (req, res, next) {
    db.query(
      'SELECT * FROM users WHERE username = ?',
      [req.params.user],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;