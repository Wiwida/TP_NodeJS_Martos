import { NextFunction, Request, Response } from 'express'
import { mockPassager, mockReservation, mockTrain } from '../share/mockData'

var express = require('express')
var router = express.Router()

router.post('/addRes', (req: Request, res: Response, next: NextFunction) => {
    mockReservation.push({
        passager: mockPassager[0],
        confirme: true,
        annuler: false,
        train: mockTrain[0],
    })
    res.send('OK')
})

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json(mockReservation)
})

module.exports = router