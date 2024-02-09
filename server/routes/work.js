const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /work.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the work.
recordRoutes.route("/work").get(async (req, res) => {
  try {
    const db_connect = await dbo.getDb("db");
    const result = await db_connect.collection("work").find({}).toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
// This section will help you get a single record by id
recordRoutes.route("/work/:id").get(async (req, res) => {
  try {
    const db_connect = await dbo.getDb();
    const myquery = { _id: new ObjectId(req.params.id) };
    const result = await db_connect.collection("work").findOne(myquery);
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
// This section will help you create a new record.
recordRoutes.route("/work/add").post(async (req, res) => {
  try {
    const db_connect = await dbo.getDb();
    const myobj = {
      company: req.body.company,
      blurb: req.body.blurb,
      logoUrl: req.body.logoUrl,
    };
    const result = await db_connect.collection("work").insertOne(myobj);
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(async (req, res) => {
  try {
    const db_connect = await dbo.getDb();
    const myquery = { _id: new ObjectId(req.params.id) };
    const newvalues = {
      $set: {
        company: req.body.company,
        blurb: req.body.blurb,
        logoUrl: req.body.logoUrl,
      },
    };
    const result = await db_connect.collection("work").updateOne(myquery, newvalues);
    console.log("1 document updated");
    res.json(result);
  } catch (err) {
    throw err;
  }
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete(async (req, res) => {
  try {
    const db_connect = await dbo.getDb();
    const myquery = { _id: new ObjectId(req.params.id) };
    const result = await db_connect.collection("work").deleteOne(myquery);
    console.log("1 document deleted");
    res.json(result);
  } catch (err) {
    throw err;
  }
});

 
module.exports = recordRoutes;