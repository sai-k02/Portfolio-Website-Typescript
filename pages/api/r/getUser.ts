// user.js, will get all users
import clientPromise from '../../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res:NextApiResponse) => {
    // define the client of mongodb
    const client = await clientPromise

    // lets define the database
    const db = client.db("userData");

    const users = db.collections("users");

    // determine what to do
    const { method } = req;

    const reqBody = req.body

    const id = reqBody["_id"]

    if(method=="GET"){
        try{
            // get user data
            const dataUsers = await db.collection("users").find({"_id":id}).toArray()
            const users = JSON.parse(JSON.stringify(dataUsers));
            res.status(200).json({success: "true", usersData:users,})
            return;
        } catch (error) {
            res.status(400).json({success: "false"})
            return;
        }

    }


    res.status(400).json({success: "false"})
    return;

}