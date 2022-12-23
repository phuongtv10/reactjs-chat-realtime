const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 500;

require('dotenv').config();

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
// const twilioClient = require('twilio')(accountSid, authToken);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.post('/', (req, res) => {
    const { message, user: sender, type, members } = req.body;

    return res.status(200).send('Not a new message request');
})

app.use('/auth', authRoutes)

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))