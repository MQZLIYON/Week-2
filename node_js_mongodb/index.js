var mongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mqz:QDGtyWQUbiTmkF8l@cluster0.jidpjjn.mongodb.net/?retryWrites=true&w=majority";



mongoClient.connect(url,function (error,dataInsert) {
    if (error){
        console.log("Server Run Failed");
    }else {
        console.log("Server run success");
        myDataInter(dataInsert);
        // daleteData(dataInsert);
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


function daleteData(dataInsert) {
    var dataBase = dataInsert.db('school');
    var collection = dataBase.collection('students');
    var deleteItem = {age:"17"};
    collection.deleteOne(deleteItem,function (error) {
        if (error){
            console.log("Delete Failed");
        }
        else {
            console.log("Delete Success");
        }
    })
}