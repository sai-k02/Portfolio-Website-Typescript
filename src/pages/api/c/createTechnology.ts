/*
File: addTechnology.js
Description:

req = POST METHOD where we define a user or userid and a certain technology


*/
import clientPromise from "../../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'

/*


 const client = await clientPromise
        .then(() => console.log("Connected to mongodb"))
        .catch(() => {console.log("Could not connect to mongodb"); return;});

 */

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // define the client of mongodb
    const client = await clientPromise

    // lets define the database
    const db = client.db("userData");

    const users = db.collections("users");

    // determine what to do
    const { method } = req;

    // JSON
    const reqBody = req.body;

    // define name
    const name = reqBody["name"];

    // const add technology
    const technology = reqBody["technology"]

    if(method=="PUT"){
        try{
            // get ready to update
            const query = {name: name}
            const update = { $push: {technologies:technology}};
            const options = {}

            const dataUsers = await db.collection("users").updateOne(query, update, options);
            //const users = JSON.parse(JSON.stringify(dataUsers));
            res.status(200).json({success: "true"})
            return;
        } catch (error) {
            res.status(400).json({success: "false", message: "Could not add Technology", requestbody: req.body})
            return;
        }

    }

}