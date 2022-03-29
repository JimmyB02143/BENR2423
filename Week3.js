const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jimmy:abcd1234@sandbox.w2od6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const { faker } = require('@faker-js/faker');
const firstname = faker.name.firstName(); 
const lastname =faker.name.lastName();
const Email = faker.internet.email(); 
const PhoneNumber = faker.phone.phoneNumber(); 

const UserModel = require("./user.js")

module.exports = {
  createANewUser: function(username, password, callback) {
    const newUserDbDocument = new UserModel({
      username: jimmy23,
      password: password
    })

    newUserDbDocument.save(function(error) {
      if (error) {
        callback({error: true})
      } else {
        callback({success: true})
      }
    })
  }
}

// const bcrypt = require("bcryptjs")

// const password = "mypass123"
// const saltRounds = 10

// bcrypt.genSalt(saltRounds, function (saltError, salt) {
// 	if (saltError) {
// 	  throw saltError
// 	} else {
// 	  bcrypt.hash(password, salt, function(hashError, hash) {
// 		if (hashError) {
// 		  throw hashError
// 		} else {
// 		  console.log(hash)
// 		  //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
// 		}
// 	  })
// 	}
//   })

client.connect(async err => {
	if (err) {
		console.log(err.message)
		return
	}
	console.log('Connected to MongoDB');
	console.time('insert');


	// client.db().admin().listDatabases().then(result => {
	// 	console.log(result);
	//   })

	// let result = await client.db('Week03').collection('companies').deleteMany({
	// })

	  client.db('Week03').collection('Individual').insertOne({

		Firstname:`${firstname}`,
		Lastname: `${lastname}`,
		PhoneNumber: `${PhoneNumber}`,
		Email:`${Email}`
		

		})

	  

	console.timeEnd('insert');
	console.log('completed')
});
