// user.ts, will get all users
import clientPromise from '../../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // define the client of mongodb
    const client = await clientPromise

    // lets define the database
    const db = client.db("userData");

    const users = db.collections("users");

    // determine what to do
    const { method } = req;


    try{
        // get user data
        const dataUsers = await db.collection("users").find({}).toArray()
        const users = JSON.parse(JSON.stringify(dataUsers));
        res.status(200).json({success: "true", usersData:users,})
        return;
    } catch (error) {
        res.status(400).json({success: "false"})
        return;
    }
    res.status(400).json({success: "false"})
    return;

}