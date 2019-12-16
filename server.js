const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose
	.connect('mongodb+srv://jhon:Lvc0wFz6L6gh24eJ@movies-uw6xa.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
	.then(() => console.log("Connected to MongoDB"))
	.catch(err => console.log(err));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/client', require('./Routes/clients'));

app.get('/authorize', (req, res) => {
	const { username, password } = req.body;
	res.send(username === "kamlesh" && password === "kamlesh123");
});

app.use((err, req, res, next) => res.send(err));

const port = process.env.PORT || 8000;
app.listen(port, err => console.log(err ? err : `Running on ${port}...`));