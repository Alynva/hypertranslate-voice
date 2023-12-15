import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process'

import express from 'express';

import translate, { supportedLangs, supportedLangsNames } from './services/translate.mjs';
import hypertranslate from './utils/hypertranslate.mjs';

exec("npm run build-tailwind")

const app = express()

app.use((req, res, next) => {
    // console.log(req);
    next();
});

app.use(express.static(join(dirname(fileURLToPath(import.meta.url)), 'public')))

app.use(express.json())

app.get('/api/getTranslateLangs', async (req, res) => {
    res.send(supportedLangsNames)
})

app.post('/api/translate', async (req, res) => {
    const { text, source, target } = req.body
    try {
        const translation = await translate(text, source, target)
        console.log(translation)
        res.send(translation)
    } catch(err) {
        console.error(err)
        res.status(500).send("Internal error.")
    }
})

app.post('/api/hypertranslate', async (req, res) => {
    const { text, source, target, jumps } = req.body
    try {
        const translation = await hypertranslate(text, source, target, jumps)
        console.log(translation)
        res.send(translation)
    } catch(err) {
        console.error(err)
        res.status(500).send("Internal error.")
    }
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});