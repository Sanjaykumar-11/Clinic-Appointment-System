var express = require("express");

var app     = express();

var path    = require("path");
var mysql = require('mysql2');
var bodyParser = require('body-parser');

app.use(express.static('reception/script'));
app.use(express.static('reception/styles'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'cas',
});

con.connect(function(err) {
if (err) {console.log(err,"Connection Error");}
});

app.get('/reception',function(req,res){
  res.sendFile(path.join(__dirname+'/reception/reception.html'));
});

app.get('/viewapp',function(req,res){
  res.sendFile(path.join(__dirname+'/reception/viewappointment.html'));
});

app.get('/logout',function(req,res){
  res.sendFile(path.join(__dirname+'reception/logout.html'));
});

app.get('/makeappointment',function(req,res){
    res.sendFile(path.join(__dirname+'/reception/makeappointment.html'));
});

app.post('/reception',function(req,res){

  var Patientid =req.body.Patientid;
  var Amount =req.body.Amount;
  
  var sql = "INSERT INTO income (Patientid, Amount) VALUES ('"+Patientid+"', '"+Amount+"')";
  con.query(sql, function (err, result) {
    res.end();
  });
});

app.post('/makeappointment',function(req,res){
    var PatientName=req.body.PatientName;
    var Age=req.body.Age;
    var Gender=req.body.Gender;
    var Address=req.body.Address;
    var Symptoms=req.body.Symptoms;
    var datee=req.body.datee;
    var timee=req.body.timee;
  
    var sql = "INSERT INTO patientrecord (PatientName, Age, Gender, Address, Symptoms, Date, Time) VALUES ('"+PatientName+"', '"+Age+"','"+Gender+"','"+Address+"','"+Symptoms+"','"+datee+"','"+timee+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
       res.end();
    });
  
});

app.listen(5500);
console.log("Running at Port 5500");
