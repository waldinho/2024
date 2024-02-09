const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db);

let _db;

module.exports = {
    connectToServer: async () => {
        try {
            const db = await client.connect();
            // Verify we got a good "db" object
            if (db) {
                _db = db.db("portfolio");
                console.log("Successfully connected to MongoDB.");
            }
            return _db;
        } catch (err) {
            throw err;
        }
    },

    getDb: () => {
        return _db;
    },
};