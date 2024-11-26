const ffmpeg = require('fluent-ffmpeg');
const dotenv = require('dotenv');

dotenv.config();

const startStreaming = () => {
    const input = process.env.STREAM_INPUT;
    const output = process.env.STREAM_OUTPUT;

    ffmpeg(input)
        .output(output)
        .on('end', () => {
            console.log('Streaming finalizado');
        })
        .on('error', (err) => {
            console.error('Erro no streaming:', err);
        })
        .run();
};

module.exports = {
    startStreaming
};
