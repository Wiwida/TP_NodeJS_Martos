import {NextFunction, Request, Response} from "express";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.json([{
    numero: "8994798",
    destination:"Paris",
    depart:"Montpellier"
  }, {
        numero: "064576",
        destination:"Marseille",
        depart:"Bordeaux"
      } ]);
});

module.exports = router;
