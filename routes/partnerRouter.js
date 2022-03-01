const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all the partners to you');
})

.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`)
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})

.delete((rew, res) => {
    res.end('Deleting all partners');
});

partnerRouter.route('partners/:partnerId')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all the partners to you');
})

.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`)
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})

.delete((rew, res) => {
    res.end('Deleting all partners');
});

module.exports = partnerRouter;