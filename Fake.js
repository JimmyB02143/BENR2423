const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jimmy:abcd1234@sandbox.w2od6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const { faker } = require('@faker-js/faker');
const bcrypt = require("bcryptjs")
const username = faker.name.findName();
const userpassword = faker.internet.password();

client.connect(async err => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log('Connected to MongoDB')

    const saltRounds = 10

    bcrypt.genSalt(saltRounds, function (saltError, salt){
        if(saltError){
            throw saltError
        }else{
            bcrypt.hash(userpassword, salt, function(hashError, hash){
                if (hashError){
                    throw hashError
                }else {
                    
                    const hash_password = hash
                    
                    client.db("Week03").collection("sample_user").insertOne({
                      user_name:username,
                      user_password:hash_password,
                    })
                    .then(result => {
                        console.log(result);
                    });
                }
            })
        }
   })
});