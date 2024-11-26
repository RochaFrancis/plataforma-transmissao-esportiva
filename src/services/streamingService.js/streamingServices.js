// Configuração de serviço de streaming
const ffmpeg = require('fluent-ffmpeg');

// Função para iniciar o streaming
const startStreaming = (input, output) => {
    ffmpeg(input)
        .output(output)
        .run();
};

module.exports = {
    startStreaming
};
