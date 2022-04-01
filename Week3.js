
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jimmy:abcd1234@sandbox.w2od6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const { faker } = require('@faker-js/faker');
const firstname = faker.name.firstName(); 
const lastname =faker.name.lastName();
const Email = faker.internet.email(); 
const PhoneNumber = faker.phone.phoneNumber(); 

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
