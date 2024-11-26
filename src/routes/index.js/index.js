const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// Rota para obter vídeos
router.get('/', videoController.getVideos);

// Rota para criar um novo vídeo
router.post('/', videoController.createVideo);

module.exports = router;
