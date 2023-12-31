<<<<<<< HEAD

=======
>>>>>>> b2ddda9707a28c59bc5959b62ac515786d35b341

const agg = [
  {
    $match: {
      product: new ObjectId('615c873ad584c748cc86e5bb'),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: '$rating',
      },
      numberOfReviews: {
        $sum: 1,
      },
    },
  },
];

MongoClient.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db("nodeExpress-Project").collection("E-commerceAPI");
    coll.aggregate(agg, (cmdErr, result) => {
      assert.equal(null, cmdErr);
      client.close();
    });
  }
);
