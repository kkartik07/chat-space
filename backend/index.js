import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'

const app = express();
const port = process.env.PORT || 5000;

//pusher
const pusher = new Pusher({
    appId: "1417515",
    key: "196cfaa497d9d59739c3",
    secret: "3481fcfae6f6f0772b79",
    cluster: "ap2",
    useTLS: true
});

app.use(express.json());

const connection_url = "mongodb+srv://admin:CANd3Ds9mjyLPKRg@cluster0.fqdmm.mongodb.net/C?retryWrites=true&w=majority";

mongoose.connect(connection_url)

app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else {
            res.status(200).send(data);
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.listen(port, () => {
    console.log(`Listening on port no. ${port}`)
})