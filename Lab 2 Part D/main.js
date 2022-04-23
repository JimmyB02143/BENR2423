const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jimmy:1234@sandbox.w2od6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

exports.connect = async () => {
try {
await client.connect();
return true;
} catch (err) {
console.log(err);
return false;
}
};
exports.close = async () => {
await client.close();
};
exports.parta = async () => {
    return client.db('sample_analytics').collection('customers').aggregate([
    
        {
          '$match': {
            'name': 'Shirley Rodriguez',
        
          }
        
        }, 
      ] 
    ).toArray();
};
exports.partab = async () => {
    return client.db('sample_analytics').collection('customers').aggregate([
    
        {
          '$match': {
            'name': 'Shirley Rodriguez'
          }},
         {
          '$lookup': {
            'from': 'accounts', 
            'localField': 'accounts', 
            'foreignField': 'account_id', 
            'as': 'accounts',
          
          }
        }]
    ). toArray();
    };
exports.partabc = async () => {
   return client.db('sample_analytics').collection('customers').aggregate([
    
        {
          '$match': {
            'name': 'Shirley Rodriguez'
          }
        }, {
          '$lookup': {
            'from': 'accounts', 
            'localField': 'accounts', 
            'foreignField': 'account_id', 
            'as': 'accounts', 
            'pipeline': [
              {
                '$match': {
                  'products': 'InvestmentFund'
                }
              }
            ]
          }
        }, {
          '$project': {
            'name': 1, 
            'address': 1, 
            'username': 1, 
            'accounts': 1
          }
        }]
   ). toArray()
};