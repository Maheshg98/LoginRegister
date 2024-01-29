//Our dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

//Let us run the server
app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})

//Let us create our Database(mysql)
const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'register db',
})

     //Let us now create a rout to the server that will register a user.

app.post('/register', (req, res)=>{
    //we need to go variables sent from the form
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password
    
    //Lets create SQL statement to insert the user to the Database table Users
    const SQL = 'INSERT INTO register (email, username, password) VALUES (?,?,?)' //we are going to enter these values through a variable
    const Values = [sentEmail, sentUserName, sentPassword]

    //Query to the execute the sql statement stated above
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully')
            res.send({message: 'User added'})
        }
    })
})


//Now we need to Login with these credentials from a registered User
//Lets create another route
app.post('/login', (req, res)=>{
    const sentloginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword
    
    //Lets create SQL statement to insert the user to the Database table Users
    const SQL = 'SELECT * FROM register WHERE username = ? && password = ?' 
    
    //we are going to enter these values through a variable
    const Values = [sentloginUserName, sentLoginPassword]
    
    //Query to the execute the sql statement stated above
    db.query(SQL, Values, (err, results)=>{
      if(err){
        res.send({error: err})
      } 
      if(results.length > 0){
        res.send(results)
      }
      else{
        res.send({message: 'Credentials Dont match!'})
      }
    })
})