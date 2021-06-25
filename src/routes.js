const express = require('express');
const route = express.Router();
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));
route.get('/room/:room', (req, res) => res.render("room"));

// Modelo de rota para o formulário da modal passar informações para o Controller
route.post('/question/:room/:question/:action', QuestionController.index);
route.post('/create-room', RoomController.create);

module.exports = route;