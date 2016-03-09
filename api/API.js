import express from 'express'
var app = express();


/*
	USERS
 */

var USERS = [
	{
		id: 123,
		name: 'Rodrigo'
	}
];

// SIGNING UP USERS
// app.post('/users',(req,res)=>{});
// LOGGING IN
// app.get('/login',(req,res)=>{});
// LOGGING OUT
// app.post('/logout',(req,res)=>{});
// RETRIEVING USERS
// app.get('/users/:id',(req,res)=>{});
// VALIDATING SESSION TOKENS, RETRIEVING CURRENT USER
// app.get('/users/me',(req,res)=>{});
// UPDATING USERS, LINKING USERS, VERIFYING EMAILS
// app.put('/users/:id',(req,res)=>{});
// QUERYING USERS
app.get('/users',(req,res)=>{
	res.json(USERS);
});
// DELETING USERS
// app.delete('/users/:id',(req,res)=>{});
// REQUESTING A PASSWORD RESET
// app.post('/requestPasswordReset',(req,res)=>{});




// // CREATING RESTRICTED SESSIONS
// app.post('/sessions',(req,res)=>{});
// // RETRIEVING SESSIONS
// app.get('/sessions/:id',(req,res)=>{});
// // RETRIEVING CURRENT SESSION
// app.get('/sessions/me',(req,res)=>{});
// // UPDATING SESSIONS
// app.put('/sessions/:id',(req,res)=>{});
// // QUERYING SESSIONS
// app.get('/sessions',(req,res)=>{});
// // DELETING SESSIONS
// app.delete('/sessions/:id',(req,res)=>{});



module.exports = app;