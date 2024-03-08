const express = require("express");

// The router will be added as a middleware and will take control of requests starting with path /about.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all data.
recordRoutes.route("/about").get(async (req, res) => {
  try {
    const db_connect = await dbo.getDb("portfolio");
    const result = await db_connect.collection("about").find({}).toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
// This section will help you get a single record by id
recordRoutes.route("/about/:id").get(async (req, res) => {
  try {
    const db_connect = await dbo.getDb();
    const myquery = { _id: new ObjectId(req.params.id) };
    const result = await db_connect.collection("about").findOne(myquery);
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
// This section will help you create a new record.
recordRoutes.route("/about/add").post(async (req, res) => {
  try {
    const db_connect = await dbo.getDb();
    const myobj = {
      title: req.body.title,
      blurb: req.body.blurb,
      imgUrl: req.body.imgUrl,
    };
    const result = await db_connect.collection("about").insertOne(myobj);
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
// This section will help you update a record by id.
recordRoutes.route("/about/update/:id").post(async (req, res) => {
  try {
    const db_connect = await dbo.getDb();
    const myquery = { _id: new ObjectId(req.params.id) };
    const newvalues = {
      $set: {
        title: req.body.title,
        blurb: req.body.blurb,
        imgUrl: req.body.imgUrl,
      },
    };
    const result = await db_connect.collection("about").updateOne(myquery, newvalues);
    console.log("1 document updated");
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
// This section will help you delete a record
recordRoutes.route("/about/:id").delete(async (req, res) => {
  try {
    const db_connect = await dbo.getDb();
    const myquery = { _id: new ObjectId(req.params.id) };
    const result = await db_connect.collection("about").deleteOne(myquery);
    console.log("1 document deleted");
    res.json(result);
  } catch (err) {
    throw err;
  }
});

 
module.exports = recordRoutes;