import { NextFunction, Request, Response } from 'express'

var express = require('express')
var router = express.Router()

router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('index', { title: 'Express' })
})

module.exports = router
