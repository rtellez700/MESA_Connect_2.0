import express from 'express'
var app = express();

var USERS = [
	{
		id: 123,
		name: 'Rodrigo'
	}
];

app.get('/', (req,res) => {
	res.json(USERS);
});

module.exports = app;