var mongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mqz:QDGtyWQUbiTmkF8l@cluster0.jidpjjn.mongodb.net/?retryWrites=true&w=majority";



mongoClient.connect(url,function (error,dataInsert) {
    if (error){
        console.log("Server Run Failed");
    }else {
        console.log("Server run success");
        myDataInter(dataInsert);
    }
});

function myDataInter(dataInsert) {
    var database = dataInsert.db('school');
    var collection = database.collection('students');
    var jsonData = {name:"Liyon",class:"Inter 1st",age:"17",address:"Dhaka,Bangladesh"};
    collection.insertOne(jsonData,function (error) {
        if (error){
            console.log("Data Insert Failed");
        } else {
            console.log("Data Insert Success");
        }
    })
}