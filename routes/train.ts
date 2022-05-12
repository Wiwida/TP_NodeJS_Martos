import {NextFunction, Request, Response} from "express";
import {mockTrain} from "../share/mockData";

var express = require('express');
var router = express.Router();

router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send(mockTrain);
});

module.exports = router;
